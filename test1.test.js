const fs = require("fs");
let {
  bacaData,
  modifyFile1,
  modifyFile2,
  modifyFile3,
} = require("./fungsiCustom");

describe("Test app using real data", () => {
  it("bacaData should be a function", async () => {
    expect(bacaData).toBeInstanceOf(Function);
  });

  it("bacaData should not be null", (done) => {
    bacaData((err, data) => {
      if (err) {
        done(err);
        return;
      }

      try {
        expect(err).toBe(null);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it("bacaData should have data with length equals 3", (done) => {
    bacaData((err, data) => {
      if (err) {
        done(err);
        return;
      }

      try {
        expect(data.length).toBe(3);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it("bacaData should have data with value as intended", (done) => {
    bacaData((err, data) => {
      if (err) {
        done(err);
        return;
      }

      try {
        console.log(data);
        expect(data).toContain("dunia");
        expect(data).toContain("world");
        expect(data).toContain("sekai");
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});