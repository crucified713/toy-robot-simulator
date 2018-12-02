class Robot {
  /**
   * A robot can perform a list of commands
   * @param {Int} x Coordinate on horizontal axis
   * @param {Int} y Coordinate on verticle axis
   * @param {STRING} facing The direction it is facing {NORTH, EAST, SOUTH, WEST}
   */
  constructor(x, y, facing) {
    this.x = x;
    this.y = y;
    this.facing = facing;
    this.isPlaced = false;
  }

  /**
   * Turn anticlockwise
   */
  left() {
    switch (this.facing) {
      case "NORTH":
        this.facing = "WEST";
        break;
      case "EAST":
        this.facing = "NORTH";
        break;
      case "SOUTH":
        this.facing = "EAST";
        break;
      case "WEST":
        this.facing = "SOUTH";
        break;
      default:
      // will not be executed
    }
  }

  /**
   * Turn clockwise
   */
  right() {
    switch (this.facing) {
      case "NORTH":
        this.facing = "EAST";
        break;
      case "EAST":
        this.facing = "SOUTH";
        break;
      case "SOUTH":
        this.facing = "WEST";
        break;
      case "WEST":
        this.facing = "NORTH";
        break;
      default:
      // will not be executed
    }
  }

  /**
   * Move one step forward
   */
  move() {
    switch (this.facing) {
      case "NORTH":
        this.y++;
        break;
      case "EAST":
        this.x++;
        break;
      case "SOUTH":
        this.y--;
        break;
      case "WEST":
        this.x--;
        break;
      default:
      // will not be executed
    }
  }

  /**
   * Place robot on map
   * @param {Object} placeDetails coordinates x and y, and facing direction
   */
  place(placeDetails) {
    this.x = placeDetails.x;
    this.y = placeDetails.y;
    this.facing = placeDetails.facing;
    this.isPlaced = true;
  }

  /**
   * Log robot's current coordinates and facing direction
   */
  report() {
    console.log(this.x + "," + this.y + "," + this.facing);
  }
}

module.exports = Robot;
