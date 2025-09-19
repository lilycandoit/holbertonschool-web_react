// Interface for Major Credits with brand property for unique identification
export interface MajorCredits {
  credits: number;
  brand: 'major';
}

// Interface for Minor Credits with brand property for unique identification
export interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Function to sum major credits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

// Function to sum minor credits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}

// Test examples demonstrating type safety
const mathMajor: MajorCredits = { credits: 4, brand: 'major' };
const scienceMajor: MajorCredits = { credits: 3, brand: 'major' };
const artMinor: MinorCredits = { credits: 2, brand: 'minor' };
const musicMinor: MinorCredits = { credits: 1, brand: 'minor' };

// This works - adding major credits
const totalMajorCredits = sumMajorCredits(mathMajor, scienceMajor);
console.log('Total major credits:', totalMajorCredits.credits); // 7

// This works - adding minor credits
const totalMinorCredits = sumMinorCredits(artMinor, musicMinor);
console.log('Total minor credits:', totalMinorCredits.credits); // 3

// This would cause TypeScript error (commented out):
// const invalidSum = sumMajorCredits(mathMajor, artMinor); // Error: Can't mix major and minor!
