const _ = require("lodash");
const { assert, expect } = require('chai');
const should = require('chai').should();

const { has, is, data, random } = require('../../util');
const { Network, Neat, methods, config, architect } = require('../../src/carrot');

describe("Neat", function() {
  describe("new Neat()", function() {
    it("new Neat()", function() {
      const neat = new Neat();
      is.neat(neat);
    })
    it("new Neat(options)", function() {
      const options = random.options.neat();
      const neat = new Neat(options);
      
      is.neat(neat);
      has.options(neat, options);
    })
    it("new Neat(dataset)", function() {
      const dataset = data.XNOR;
      const neat = new Neat(dataset);
      
      is.neat(neat);
      has.dataset(neat, dataset);
    })
    it("new Neat(input, output)", function() {
      const inputs = _.random(50);
      const outputs = _.random(50)
      const neat = new Neat(inputs, outputs);
      
      is.neat(neat);
      has.dimensions(neat, inputs, outputs);
    })
    it("new Neat(dataset, options)", function() {
      const dataset = data.XNOR;
      const options = random.options.neat();
      
      const neat = new Neat(dataset, options);
      
      is.neat(neat);
      has.dataset(neat, dataset);
      has.options(neat, options);
      
    })
    it("new Neat(input, output, options)", function() {
      const inputs = _.random(50);
      const outputs = _.random(50);
      const options = random.options.neat();
      
      const neat = new Neat(inputs, outputs, options);
      
      is.neat(neat);
      has.options(neat, options);
      has.dimensions(neat, inputs, outputs);
    })
    it("new Neat(input, output, dataset)", function() {
      const inputs = _.random(50);
      const outputs = _.random(50);
      const dataset = data.XNOR;
      
      const neat = new Neat(inputs, outputs, dataset);
      
      is.neat(neat);
      has.dataset(neat, dataset);
      has.dimensions(neat, inputs, outputs);
    })
    it("new Neat(input, output, dataset, options)", function() {
      const inputs = _.random(50);
      const outputs = _.random(50);
      const dataset = data.XNOR;
      const options = random.options.neat();
      
      const neat = new Neat(inputs, outputs, dataset, options);
      
      is.neat(neat);
      has.dataset(neat, dataset);
      has.options(neat, options);
      has.dimensions(neat, inputs, outputs);
    })
    
    // it.skip("new Neat(population)", function() {
    //   const neat = new Neat();
    //   is.neat(neat);
    // })
    // it.skip("new Neat(population, options)", function() {
    //   const neat = new Neat();
    //   is.neat(neat);
    // })
    // it.skip("new Neat(population, dataset)", function() {
    //   const neat = new Neat();
    //   is.neat(neat);
    // })
    // it.skip("new Neat(population, dataset, options)", function() {
    //   const neat = new Neat();
    //   is.neat(neat);
    // })
  })
  describe("neat.createPool()", function() {
    // Should ignore for `neat.createPopulation()`...
  })
  describe("neat.createPopulation()", function() {
    it("neat.createPopulation() => {Network[]}", function() {
      const neat = new Neat();
      const population = neat.createPopulation();
      
      expect(population).to.be.an.instanceof(Array);
      expect(population).to.have.lengthOf.above(0);
      
      for (let genome = 0; genome < population.length; genome++) {
        expect(population[genome]).to.be.an.instanceOf(Network);
      }
    })
    it("neat.createPopulation(network) => {Network[]}", function() {
      const inputs = Math.ceil(Math.random() * 10);
      const outputs = Math.ceil(Math.random() * 10);
      const network = new Network(inputs, outputs);
      
      const neat = new Neat();
      
      const population = neat.createPopulation(network);
      
      expect(population).to.be.an.instanceof(Array);
      expect(population).to.have.lengthOf.above(0);
      
      for (let genome = 0; genome < population.length; genome++) {
        expect(population[genome]).to.be.an.instanceOf(Network);
        expect(population[genome].input_size).to.equal(inputs);
        expect(population[genome].output_size).to.equal(outputs);
      }
    })
    it("neat.createPopulation(size) => {Network[]}", function() {
      const size = Math.ceil(Math.random() * 100);
      
      const neat = new Neat();
      const population = neat.createPopulation(size);
      
      expect(population).to.be.an.instanceof(Array);
      expect(population).to.have.lengthOf(size);
      
      for (let genome = 0; genome < population.length; genome++) {
        expect(population[genome]).to.be.an.instanceOf(Network);
      }
    })
    it("neat.createPopulation(network, size) => {Network[]}", function() {
      const size = Math.ceil(Math.random() * 100);
      
      const inputs = Math.ceil(Math.random() * 10);
      const outputs = Math.ceil(Math.random() * 10);
      const network = new Network(inputs, outputs);
      
      const neat = new Neat();
      const population = neat.createPopulation(network, size);
      
      expect(population).to.be.an.instanceof(Array);
      expect(population).to.have.lengthOf(size);
      
      for (let genome = 0; genome < population.length; genome++) {
        expect(population[genome]).to.be.an.instanceOf(Network);
        expect(population[genome].input_size).to.equal(inputs);
        expect(population[genome].output_size).to.equal(outputs);
      }
    })
  })
  describe("neat.replace()", function() {
    it("neat.replace() => {ReferenceError}")
    it("neat.replace(transform=Network) => {Network[]}")
    it("neat.replace(transform=Function) => {Network[]}")
    it("neat.replace(population, transform=Network) => {Network[]}")
    it("neat.replace(population, transform=Function) => {Network[]}")
    it("neat.replace(filter=Network, transform=Network) => {Network[]}")
    it("neat.replace(filter=Network, transform=Function) => {Network[]}")
    it("neat.replace(filter=Function, transform=Network) => {Network[]}")
    it("neat.replace(filter=Function, transform=Function) => {Network[]}")
    it("neat.replace(population, filter=Network, transform=Network) => {Network[]}")
    it("neat.replace(population, filter=Network, transform=Function) => {Network[]}")
    it("neat.replace(population, filter=Function, transform=Network) => {Network[]}")
    it("neat.replace(population, filter=Function, transform=Function) => {Network[]}")
  })
  describe("neat.mutate()", function() {
    it("neat.mutate() => {Network[]}")
    
    it("neat.mutate(genomes=Network) => {Network}") // Should be static
    it("neat.mutate(genomes=Network[]) => {Network[]}") // Should be static
     
    it("neat.mutate(methods=mutation) => {Network[]}")
    it("neat.mutate(methods=mutation[]) => {Network[]}")
    
    it("neat.mutate(genomes=Network, methods=mutation) => {Network}") // Should be static
    it("neat.mutate(genomes=Network, methods=mutation[]) => {Network}") // Should be static
    
    it("neat.mutate(genomes=Network[], methods=mutation) => {Network[]}") // Should be static
    it("neat.mutate(genomes=Network[], methods=mutation[]) => {Network[]}") // Should be static
  })
  describe("neat.mutateRandom()", function() {
    // Could ignore this if `neat.mutate()` is done effectively
  })
  describe("neat.evolve()", function() {
    it("neat.evolve() => {Network}")
    it("neat.evolve(dataset) => {Network}")
    it("neat.evolve(options) => {Network}")
    it("neat.evolve(dataset, options) => {Network}")
    it("neat.evolve(genomes, dataset, options) => {Network}") // Should be static
  })
  describe("neat.getParent()", function() {
    it("neat.getParent() => {Network}")
    it("neat.getParent(method) => {Network}")
  })
  describe("neat.getOffspring()", function() {
    it("neat.getOffspring() => {Network}")
  })
  describe("neat.evaluate()", function() {
    it("neat.evaluate() => {Network[]}")
    it("neat.evaluate(dataset) => {Object}")
    it("neat.evaluate(options={ 'clear': true, networks': true }) => {{ 'best': Network, 'average': Network, 'worst': Network }}")
    it("neat.evaluate(dataset, { 'clear': true, networks': true }) => {{ 'best': Network, 'average': Network, 'worst': Network }}")
  })
  describe("neat.sort()", function() {
    it("neat.sort() => {Network[]}")
  })
  describe("neat.getFittest()", function() {
    it("neat.getFittest() => {Network}")
  })
  describe("neat.getAverage()", function() {
    it("neat.getAverage() => {Network}")
  })
  describe("neat.toJSON()", function() {
    it("neat.toJSON() => {Object}")
  })
  describe("Neat.fromJSON()", function() {
    it("neat.fromJSON() => {ReferenceError}")
    it("neat.fromJSON(json) => {Neat}")
  })
  
  
  
  
})