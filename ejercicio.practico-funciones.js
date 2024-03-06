function PowerpuffGirl (name,color,superpower){
    this.name = name
    this.color = color
    this.superpower =superpower
    this.isLeader= false

    this.displayInfo = function () {
        console.log(`Powerpuff Girl Information:
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower}
        ${this.isLeader ? 'leader: Yes' : 'Leader: No'}
        `)
    }

    this.becomeLeader = function () {
        this.isLeader = true
        console.log(`${this.name} has become the leader of the Power Puff Girl`)
    }
}

const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice')
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super Strength')
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Flight')

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()