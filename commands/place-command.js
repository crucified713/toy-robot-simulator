const Command = require("./command");

class PlaceCommand extends Command {
  constructor(robot, map) {
    super(robot, map);
  }

  /**
   * Execute PLACE
   * @param {Object} placeDetails coordinates x and y, and facing direction
   */
  execute(placeDetails) {
    if (this.map.isPositionValid(placeDetails)) {
      this.robot.place(placeDetails);
    }
  }
}

module.exports = PlaceCommand;
