/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, browser: true */
/*global $, define, brackets */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
    "use strict";
    
    var CMD_GENERATE_WITH_YEOMAN = "com.adobe.brackets.commands.yeoman.generateFromYeoman";

    var CommandManager = brackets.getModule("command/CommandManager"),
        Menus = brackets.getModule("command/Menus");

    // Function to run when the menu item is clicked
    function _openYeoman() {
        window.alert("Yeoman!");
    }

    // First, register a command - a UI-less object associating an id to a handler
    CommandManager.register("Generate with Yeoman...", CMD_GENERATE_WITH_YEOMAN, _openYeoman);

    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)
    var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    menu.addMenuItem(CMD_GENERATE_WITH_YEOMAN);

    // We could also add a key binding at the same time:
    menu.addMenuItem(CMD_GENERATE_WITH_YEOMAN, "Ctrl-Alt-Y");
    // (Note: "Ctrl" is automatically mapped to "Cmd" on Mac)
});