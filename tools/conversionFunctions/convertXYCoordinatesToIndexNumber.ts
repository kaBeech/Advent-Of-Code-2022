const convertXYCoordinatesToIndexNumber = (
  xyCoordinates: number[],
  base: number,
) => {
  if (base < 0) {
    throw new Error(
      `Base must be a positive integer! Received: ${base}`,
    );
  }
  if (base % 1 !== 0) {
    throw new Error(
      `Base must be a positive integer! Received: ${base}`,
    );
  }
  if (xyCoordinates.length < 2) {
    throw new Error(
      `Coordinate array must have 2 elements - input is too short! Received: [${xyCoordinates}]`,
    );
  }
  if (xyCoordinates.length > 2) {
    throw new Error(
      `Coordinate array must have 2 elements - input is too long! Received: [${xyCoordinates}]`,
    );
  }
  for (const coordinate of xyCoordinates) {
    if (coordinate % 1 !== 0) {
      throw new Error(
        `Coordinates must all be integers! Received: [${xyCoordinates}]`,
      );
    }
    if (coordinate < 0) {
      throw new Error(
        `Coordinates must all be in domain! Received Coordinates: [${xyCoordinates}], Domain: 0 to ${
          base - 1
        }`,
      );
    }
    if (coordinate >= base) {
      throw new Error(
        `Coordinates must all be in domain! Received Coordinates: [${xyCoordinates}], Domain: 0 to ${
          base - 1
        }`,
      );
    }
  }

  const index = (xyCoordinates[0] + (xyCoordinates[1] * base));

  return index;
};

export { convertXYCoordinatesToIndexNumber };
