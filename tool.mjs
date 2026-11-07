export const metadata = {"slug": "palindrome-lab", "title": "Palindrome Lab", "description": "Check whether text is symmetric after normalization."};
export const fields = [{"name": "text", "label": "Text", "value": "Never odd or even"}];
export function compute(input){
  const normalized=input.text.toLowerCase().replace(/[^a-z0-9]/g,'');return {normalized,isPalindrome:normalized===normalized.split('').reverse().join('')}
}
