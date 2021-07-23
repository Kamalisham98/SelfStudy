var genre;
(function (genre) {
    genre[genre["male"] = 0] = "male";
    genre[genre["female"] = 1] = "female";
})(genre || (genre = {}));
var kamal = genre.male;
console.log(genre);
