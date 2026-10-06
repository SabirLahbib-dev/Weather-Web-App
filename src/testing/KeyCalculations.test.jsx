import { describe, it, expect } from "vitest";
import {
  getDiffrenceLabel,
  getHumidityLevel,
  getWindStatus,
  getBeaufortScale,
  getWindcompassLabel,
} from "../utils/helpers";

describe("Test suite: KeyCalculations using utility functions", () => {
  it("provides diffrence label", () => {
    const label1 = getDiffrenceLabel(29, 33);
    const label2 = getDiffrenceLabel(25, 20);
    const label3 = getDiffrenceLabel(10, 10);

    // expectations
    expect(label1).toEqual("↓ Cooler");
    expect(label2).toEqual("↑ Warmer");
    expect(label3).toEqual("Equal");
  });

  it("provides humidity lavel", () => {
    const humidityLevel1 = getHumidityLevel(23);
    const humidityLevel2 = getHumidityLevel(44);
    const humidityLevel3 = getHumidityLevel(88);

    // expectations
    expect(humidityLevel1).toEqual("Dry");
    expect(humidityLevel2).toEqual("Moderate");
    expect(humidityLevel3).toEqual("Humid");
  });
  it("returns wind status", () => {
    const windStatus1 = getWindStatus(28);
    const windStatus2 = getWindStatus(74);
    const windStatus3 = getWindStatus("test");

    // expectations
    expect(windStatus1).toBe("Moderate Breeze");
    expect(windStatus2).toBe("Gale");
    expect(windStatus3).toBe("Unknown");
  });

  it("returns BeauFort scale", () => {
    const beauFortScale1 = getBeaufortScale(19);
    const beauFortScale2 = getBeaufortScale(66);
    const beauFortScale3 = getBeaufortScale(200);

    // expectations
    expect(beauFortScale1).toBe("Force 3");
    expect(beauFortScale2).toBe("Force 8");
    expect(beauFortScale3).toBe("Force 12");
  });

  it("returns wind compass label", () => {
    const windLabel1 = getWindcompassLabel(22);
    const windLabel2 = getWindcompassLabel(42);
    const windLabel3 = getWindcompassLabel("NaN");

    // expectations
    expect(windLabel3).toBe("N");
    expect(windLabel1).toBe("NNE");
    expect(windLabel2).toBe("NE");
  });
});
