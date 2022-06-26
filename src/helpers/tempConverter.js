export const convertToFahrenheit = (x) => {
    return convertToCelsius(x) * 1.8 + 32;
};

export const convertToCelsius = (x) => {
    return x - 273.15;
};
