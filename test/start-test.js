// MOCK START TESTS //

const chai = require('chai');
const expect = chai.expect;
const { startMock } = require('../src/startMock');
const { dataSub } = require('../src/dataSub');

describe('startMock', () => {
  let round;
  
  beforeEach(() => {
    round = startMock(dataSub);
  });
  
  it('should create cards using the data subset and put them in a deck', () => {
    expect(round.deck.length).to.equal(8);
    expect(round.deck[0].id).to.equal(1);
  });

  it('should create a new round using the deck', () => {
    expect(round.currentCard.correctAnswer).to.equal('object');
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});