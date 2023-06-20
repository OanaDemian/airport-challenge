import Weather from '../src/Weather.js';

describe('Weather Tests', () => {
  class MockWeather {
    randomNumber = () => 1;
    getCurrentWeather = () => 'stormy';
  }
  let mockWeather = new MockWeather();
    
    it('should return stormy when calling getCurrentWether', () => {
      //arrange
      //act
      //assert
      expect(mockWeather.getCurrentWeather()).toBe('stormy');
    });
  
});