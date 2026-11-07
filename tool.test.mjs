import test from 'node:test';
import assert from 'node:assert/strict';
import {compute} from './tool.mjs';
test('sample behavior',()=>{const result=compute({"text": "Never odd or even"});for(const [key,value] of Object.entries({"normalized": "neveroddoreven", "isPalindrome": true}))assert.deepStrictEqual(result[key],value,key)});
