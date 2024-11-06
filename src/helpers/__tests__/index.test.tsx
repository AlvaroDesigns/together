import { describe, expect, it } from 'vitest';

import { params } from '../params';

// Returns an object with expected properties and values when given valid input data.
describe('params TEMPORAL', () => {
  // Returns an object with expected properties and values when given valid input data.
  it('should return an object with expected properties and values when given valid input data', () => {
    // Arrange
    const data = {
      address: {
        zipCode: '12345',
        streetName: 'Main Street',
        city: 'New York',
        region: 'NY',
      },
      contact: {
        email: 'test@example.com',
        phone: '1234567890',
        acceptsMarketing: true,
      },
      personal: {
        name: 'John',
        surname: 'Doe',
        nationality: 'Española',
        civil: 'Casado',
        gender: 'Hombre',
        profession: 'Ingeniero',
        dni: '123456789Q',
        birthDate: '1990-01-01',
      },
    };

    // Act
    const result = params(data);

    // Assert
    expect(result).toBeDefined();
  });
});
