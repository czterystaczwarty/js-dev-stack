var privateVar = "I'm private";

exports.publicVar = "I'm public";

exports.someFunction = function (x) {
  return {
    one: 1 * x,
    two: "two" + x
  };
};

exports.arrowSquare = (x) => x * x;