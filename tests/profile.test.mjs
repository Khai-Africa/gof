import test from "node:test";
import assert from "node:assert/strict";
import {readFile,readdir} from "node:fs/promises";

const source=await readFile(new URL("../src/App.tsx",import.meta.url),"utf8");
test("first visit requires a persisted name and avatar",()=>{assert.match(source,/gof-player-v1/);assert.match(source,/First name or nickname/);assert.match(source,/clean\.length<2\|\|!avatar/);assert.match(source,/Start playing/)});
test("profile identity is reused throughout the app",()=>{assert.match(source,/player\.name/);assert.match(source,/player\.avatar/);assert.match(source,/Your crew/);assert.match(source,/Edit player/)});
test("all uploaded avatars are included",async()=>{const files=await readdir(new URL("../public/avatars",import.meta.url));assert.equal(files.filter(f=>f.endsWith(".png")).length,10)});
test("all eight games are present",()=>{for(const name of ["Verse Vault","Choose the Way","Kingdom Signals","Witness Run","Witness Protocol","Wayfinder","Faith Threads","VerseForge"])assert.match(source,new RegExp(name))});
