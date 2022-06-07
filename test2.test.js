const fs = require("fs");
let {
  bacaData,
  modifyFile1,
  modifyFile2,
  modifyFile3,
} = require("./fungsiCustom");

const mockFile1 = "./dummy1.json";
const mockFile2 = "./dummy2.json";
const mockFile3 = "./dummy3.json";

const mockedData1 = { message: "halo aku" };
const mockedData2 = [{ message: "halo kamu" }];
const mockedData3 = [{ data: { message: "halo kita" } }];

fs.writeFileSync(mockFile1, JSON.stringify(mockedData1, null, 2));
fs.writeFileSync(mockFile2, JSON.stringify(mockedData2, null, 2));
fs.writeFileSync(mockFile3, JSON.stringify(mockedData3, null, 2));

describe("Test app using mock data", () => {
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
    modifyFile1(mockFile1);
    modifyFile2(mockFile2);
    modifyFile3(mockFile3);

    bacaData((err, data) => {
      if (err) {
        done(err);
        return;
      }

      try {
        console.log(data);
        expect(data).toContain("aku");
        expect(data).toContain("kamu");
        expect(data).toContain("kita");
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
