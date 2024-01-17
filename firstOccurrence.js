//Input: haystack = "sadbutsad", needle = "sad"
//Output: 0
const haystack = "sadbutsad",needle = "sad";

for (let i = 0; i < haystack.length; i++) {
  const element = haystack[i];

  if (element == needle[0]) {
    let temp = "";
    for (let j = i; j < needle.length + i; j++) {
      temp = temp + haystack[j];
    }
    if (temp == needle) {
      console.log(i);
    }
  }
}
