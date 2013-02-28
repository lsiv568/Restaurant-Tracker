(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['restaurant'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <button class=\"visit-restaurant\" id=\"";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Visit</button>\n  ";
  return buffer;
  }

  buffer += "<div class=\"restaurant-entry\">\n  ";
  stack1 = helpers.unless.call(depth0, depth0.visited, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div>\n    <span><strong>Name</strong>:</span>\n    <span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n  <div>\n    <span><strong>Date</strong>:</span>\n    <span>";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n  <div>\n    <span><strong>Location</strong>:</span>\n    <span>";
  if (stack1 = helpers.location) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.location; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n  <div>\n    <span><strong>Rating</strong>:</span>\n    <span>";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n  <div>\n    <span><strong>Attendees</strong>:</span>\n    <span>";
  if (stack1 = helpers.attendees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attendees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n  <div>\n    <span><strong>Notes</strong>:</span>\n    <span>";
  if (stack1 = helpers.notes) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.notes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n</div>\n<br/>";
  return buffer;
  });
templates['restaurant_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " class=\"visiting\" ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <input type=\"text\" name=\"name\" value=";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n    <input type=\"text\" name=\"name\" placeholder=\"Savinos\">\n  ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <input type=\"text\" name=\"date\" value=";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">\n  ";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "\n    <input type=\"text\" name=\"date\" placeholder=\"February 14, 2013\">\n  ";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <input type=\"text\" name=\"attendees\" value=";
  if (stack1 = helpers.attendees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attendees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">\n  ";
  return buffer;
  }

function program13(depth0,data) {
  
  
  return "\n    <input type=\"text\" name=\"attendees\" placeholder=\"Louis, Patience\">\n  ";
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <input type=\"text\" name=\"location\" value=";
  if (stack1 = helpers.location) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.location; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">\n  ";
  return buffer;
  }

function program17(depth0,data) {
  
  
  return "\n    <input type=\"text\" name=\"location\" placeholder=\"Boston - Atlanic Wharf\">\n  ";
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <input type=\"text\" name=\"rating\" value=";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">\n  ";
  return buffer;
  }

function program21(depth0,data) {
  
  
  return "\n    <input type=\"text\" name=\"rating\" placeholder=\"1-5\">\n  ";
  }

function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <textarea name=\"notes\">";
  if (stack1 = helpers.notes) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.notes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n  ";
  return buffer;
  }

function program25(depth0,data) {
  
  
  return "\n    <textarea name=\"notes\" placeholder=\"Enter special notes here\"></textarea>\n  ";
  }

function program27(depth0,data) {
  
  
  return "\n    <label>Visited <input type=\"checkbox\" name=\"visited\" checked></label>\n  ";
  }

function program29(depth0,data) {
  
  
  return "\n    <label>Visited <input type=\"checkbox\" name=\"visited\"></label>\n  ";
  }

function program31(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <button id=\"vist-button\" class=\"btn\" data-id=";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">Visit</button>\n    ";
  return buffer;
  }

function program33(depth0,data) {
  
  
  return "\n      <button type=\"submit\" class=\"btn\">Add</button>\n    ";
  }

  buffer += "<fieldset ";
  stack1 = helpers['if'].call(depth0, depth0._id, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n  <label>Restaurant Name</label>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.name, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <label>Date Visited</label>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.date, {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <label>Attendees</label>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.attendees, {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <label>Location</label>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.location, {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <label>Rating</label>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.rating, {hash:{},inverse:self.program(21, program21, data),fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <label>Special Notes</label>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.notes, {hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, depth0._id, {hash:{},inverse:self.program(29, program29, data),fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div>\n    ";
  stack1 = helpers['if'].call(depth0, depth0._id, {hash:{},inverse:self.program(33, program33, data),fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div>\n</fieldset>\n";
  return buffer;
  });
})();