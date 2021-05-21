const keywordExtractor = require('keyword-extractor');
const text = "Live building searching for video applications, which is called for ages only uh on and politics will be uploaded to the platform and the students would basically search for the particular topic did she wants to study and you'll get a result of the number of radio in which the top it was walking along. And at that time at the top it was from the world so that you could get an idea where to look for. Instead of searching through the whole video, Which is much maybe 12 To us appointed and only looking for something, we just travel about for 10 minutes";
let result = keywordExtractor.extract(text, {
    language: "english",
    remove_digits: true,
    remove_duplicates: true,

})
result = result.filter(word => word.length > 3);
console.log(result);