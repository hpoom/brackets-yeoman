/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, browser: true */
/*global $, define, brackets */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
    "use strict";
    
    var CMD_GENERATE_WITH_YEOMAN = "com.adobe.brackets.commands.yeoman.generateFromYeoman";

    var CommandManager = brackets.getModule("command/CommandManager"),
        KeyBindingManager = brackets.getModule("command/KeyBindingManager"),
        Menus = brackets.getModule("command/Menus"),
        NodeDomain = brackets.getModule("utils/NodeDomain"),
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
    
    var yeomanDomain = new NodeDomain("yeoman", ExtensionUtils.getModulePath(module, "node/YeomanDomain"));

    // Function to run when the menu item is clicked
    function _openYeoman() {
        yeomanDomain.exec("getVersion").done(function (version) {
            window.alert("Yeoman!  Version: " + version);
        }).fail(function (err) {
            console.error("[brackets-yeoman-node] failed to run yeoman.getVersion", err);
        });
        
    }

    // First, register a command - a UI-less object associating an id to a handler
    var generateYeomanCmd = CommandManager.register("Generate with Yeoman...", CMD_GENERATE_WITH_YEOMAN, _openYeoman),
        fileMenu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    
    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)
    fileMenu.addMenuDivider();
    fileMenu.addMenuItem(generateYeomanCmd);
    
    // Add key binding  (Note: "Ctrl" is automatically mapped to "Cmd" on Mac)
    KeyBindingManager.addBinding(CMD_GENERATE_WITH_YEOMAN, {key: "Ctrl-Shift-Y"});
});