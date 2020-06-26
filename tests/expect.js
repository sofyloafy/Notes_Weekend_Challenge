var expect = {
  isTrue: function (expectationToCheck) {
    if (!expectationToCheck) {
      throw new Error(
        "Expectation failed: " + expectationToCheck + " is not truthy"
      );
    } else {
      console.log("Test function has passed👍✅");
    }
  },

  isFalse: function (expectationToCheck) {
    if (expectationToCheck) {
      throw new Error(
        "Expectation Failed: " + expectationToCheck + " is not falsy"
      );
    } else {
      console.log("Test function has passed 👍✅");
    }
  },
};
//our expect + .toEqual in jasmine
