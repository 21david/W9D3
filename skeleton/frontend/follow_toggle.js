const ApiUtil = require("./api_util.js")

function FollowToggle($el) { // $el is the button
    // this.userId = $el.find("data-user-id");
    // this.followState = $el.find("data-initial-follow-state");
    this.userId = $el.data('user-id');
    this.followState = $el.data('initial-follow-state');
    this.el = $el;
    this.el.innerText = this.render();
}

FollowToggle.prototype.render = function() {
    this.followState === 'followed' ? "Follow!" : "Unfollow!"
}

FollowToggle.prototype.handleClick = function(e) {
    e.preventDefault();
    if(this.render() === 'Unfollow!') {
       ApiUtil.follow(this.userId).then();
    } else {

    }
}

module.exports = FollowToggle;