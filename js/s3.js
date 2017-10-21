$.ajax({
  type: 'POST',
  url: "https://8lk79kv30d.execute-api.ap-southeast-1.amazonaws.com/prod",
  headers: {
    "Content-Type": "text/plain",
  },
  data: JSON.stringify({
    "min": 100,
    "max": 1000
  })
}).done(function(data) {
  console.log("Starting POST experiment:");
  console.log(data);
});
