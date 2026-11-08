import { readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
const base=process.env.NEXT_PUBLIC_BASE_PATH ?? '/phone-gpt-website';
const site=(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://parth-verma7.github.io/phone-gpt-website').replace(/\/+$/, '');
const routes=['','features','models','get-started','downloads','faq','privacy','contact','about','changelog'];
const titles=new Set(), descriptions=new Set();let links=0,assets=0;
for(const route of routes){
 const path=route?`/${route}/`:'/'; const html=readFileSync(join('out',route,'index.html'),'utf8');
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert(title,`Missing title ${path}`);assert(!titles.has(title),`Duplicate title ${path}`);titles.add(title);
 const desc=html.match(/<meta name="description" content="([^"]+)"/s)?.[1];assert(desc,`Missing description ${path}`);assert(!descriptions.has(desc),`Duplicate description ${path}`);descriptions.add(desc);
 assert(html.includes(`<link rel="canonical" href="${site}${path}"`),`Bad canonical ${path}`);
 assert(html.includes(`<meta property="og:url" content="${site}${path}"`),`Bad OG URL ${path}`);
 assert.equal((html.match(/<h1(?:>|\s)/g)||[]).length,1,`H1 count ${path}`);
 assert.equal((html.match(/<main(?:>|\s)/g)||[]).length,1,`main count ${path}`);
 assert(!html.includes('noindex'),`Unexpected noindex ${path}`);
 const copy=html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,'').replace(/<[^>]*>/g,' ');
 assert(!/\b(founder|developer|Metro|Expo Go|native compilation|signing certificate|SDK|UTF-8|version code|source preparation)\b/i.test(copy),`Developer copy or unwanted title in public page ${path}`);
 assert(!/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i.test(copy),`Email address printed in public page ${path}`);
 for(const match of html.matchAll(/<(?:a|link|script|img)\b[^>]*?\b(?:href|src)="([^"]+)"/g)){
  const href=match[1]; if(!href.startsWith('/'))continue;
  assert(href.startsWith(base+'/'),`Unprefixed application URL ${path}: ${href}`);
  const resource=decodeURIComponent(href.slice(base.length).split(/[?#]/)[0]); let file=join('out',resource);
  if(resource.endsWith('/'))file=join(file,'index.html');else if(!existsSync(file)&&!resource.split('/').pop().includes('.'))file=join(file,'index.html');
  assert(existsSync(file)&&statSync(file).isFile(),`Missing output ${path}: ${href}`);
  if(match[0].startsWith('<a')){
   links++;
   const fragment=href.split('#')[1];
   if(fragment)assert(readFileSync(file,'utf8').includes(`id="${decodeURIComponent(fragment)}"`),`Missing section target ${path}: ${href}`);
  }else assets++;
 }
}
const sitemap=readFileSync('out/sitemap.xml','utf8');const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.equal(new Set(urls).size,10);for(const route of routes)assert(urls.includes(`${site}/${route?route+'/':''}`));
assert(existsSync('out/.nojekyll'));assert(existsSync('out/social-card.png'));assert(existsSync('out/favicon.png'));
const home=readFileSync('out/index.html','utf8');assert(home.includes('application/ld+json'));for(const id of ['home','features','models','get-started','faq','download','say-hello'])assert(home.includes(`id="${id}"`),`Homepage section missing: ${id}`);assert(home.includes('founder-name'));assert(home.includes('A model I’d love to use'));
for(const path of ['out/index.html','out/contact/index.html']){const html=readFileSync(path,'utf8');assert(/<fieldset[^>]*disabled=/.test(html),'Contact fields must be disabled in pre-hydration HTML');assert(!html.includes('@gmail.com'),'Inbox addresses must not be printed in public HTML');assert(!/<a[^>]*href="mailto:/.test(html),'Printed email links must be replaced by the form');}
assert.equal(readFileSync('lib/site.ts','utf8').match(/CONTACT_EMAIL = '([^']+)'/)[1],'tensor0712@gmail.com');
assert(home.includes('https://www.linkedin.com/in/parth-verma-226007228/'),'Direct LinkedIn profile missing');
assert(home.includes('Contribute on GitHub'),'Contribution link missing');
for(const route of routes.filter(Boolean))assert(readFileSync(join('out',route,'index.html'),'utf8').includes('Back to Home'),`Missing Home shortcut ${route}`);
const privacy=readFileSync('out/privacy/index.html','utf8');assert(privacy.includes('backup'));
console.log(`PASS: ${routes.length} routes, unique metadata/canonicals, H1/main landmarks, ${links} internal links and ${assets} asset references, sitemap, JSON-LD, contact form and static assets.`);

for(const route of ["", "features"]) { const html=readFileSync(join("out",route,"index.html"),"utf8"); assert(html.includes('id="web-search"'), "Web search feature section missing"); assert(html.includes("Optional web search"), "Search copy missing"); }
assert(privacy.includes('id="web-search-privacy"') && privacy.includes("Brave Search"), "Search privacy disclosure missing");
assert(home.includes("android-v0.5.11/PhoneGPT-v0.5.11-standalone.apk"), "Current search-capable APK missing");

const expectedApk="https://github.com/parth-verma7/phone-gpt-website/releases/download/android-v0.5.11/PhoneGPT-v0.5.11-standalone.apk";
for(const route of ["", "downloads"]) { const html=readFileSync(join("out",route,"index.html"),"utf8"); assert(html.includes(`href="${expectedApk}"`), `Latest APK missing on ${route || "home"}`); for(const match of html.matchAll(/href="([^"]+\.apk)"/g)) assert.equal(match[1], expectedApk, "Outdated APK link"); }
