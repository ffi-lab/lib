module.exports = function (grunt) {
	var theLibs = new Array("cms","css","jquery","js","sass","syntax-highlighting");
	var theWord = new Array("install","uninstall","update");
		
    grunt.initConfig({
    	bgShell: {
    		bowerInstallcms: 			{cmd: "cd " + theLibs[0] + " && bower " + theWord[0]},
    		bowerInstallcss: 			{cmd: "cd " + theLibs[1] + " && bower " + theWord[0]},
    		bowerInstalljquery: 	{cmd: "cd " + theLibs[2] + " && bower " + theWord[0]},
    		bowerInstalljs: 			{cmd: "cd " + theLibs[3] + " && bower " + theWord[0]},
    		bowerInstallsass: 		{cmd: "cd " + theLibs[4] + " && bower " + theWord[0]},
    		bowerInstallsyntax: 	{cmd: "cd " + theLibs[5] + " && bower " + theWord[0]},
    		
    		task: "add",
    		
    		bowerUninstallcms: 		{cmd: "cd " + theLibs[0] + " && bower " + theWord[1] + " *"},
    		bowerUninstallcss: 		{cmd: "cd " + theLibs[1] + " && bower " + theWord[1] + " *"},
    		bowerUninstalljquery: {cmd: "cd " + theLibs[2] + " && bower " + theWord[1] + " *"},
    		bowerUninstalljs: 		{cmd: "cd " + theLibs[3] + " && bower " + theWord[1] + " *"},
    		bowerUninstallsass: 	{cmd: "cd " + theLibs[4] + " && bower " + theWord[1] + " *"},
    		bowerUninstallsyntax: {cmd: "cd " + theLibs[5] + " && bower " + theWord[1] + " *"},
    		
    		task: "drop",
    		
    		bowerUpdatecms: 			{cmd: "cd " + theLibs[0] + " && bower " + theWord[2]},
    		bowerUpdatecss: 			{cmd: "cd " + theLibs[1] + " && bower " + theWord[2]},
    		bowerUpdatejquery: 		{cmd: "cd " + theLibs[2] + " && bower " + theWord[2]},
    		bowerUpdatejs: 				{cmd: "cd " + theLibs[3] + " && bower " + theWord[2]},
    		bowerUpdatesass: 			{cmd: "cd " + theLibs[4] + " && bower " + theWord[2]},
    		bowerUpdatesyntax: 		{cmd: "cd " + theLibs[5] + " && bower " + theWord[2]},
    		
    		task: "update"
    	}
    });

    grunt.loadNpmTasks('grunt-bg-shell');
    
    grunt.registerTask('add',
    		[
    		 'bgShell:bowerInstallcms',
    		 'bgShell:bowerInstallcss',
    		 'bgShell:bowerInstalljquery',
    		 'bgShell:bowerInstalljs',
    		 'bgShell:bowerInstallsass',
    		 'bgShell:bowerInstallsyntax',
    		]
    );
    
    grunt.registerTask('drop',
    		[
    		 'bgShell:bowerUninstallcms',
    		 'bgShell:bowerUninstallcss',
    		 'bgShell:bowerUninstalljquery',
    		 'bgShell:bowerUninstalljs',
    		 'bgShell:bowerUninstallsass',
    		 'bgShell:bowerUninstallsyntax',
    		]
    );
    
    grunt.registerTask('update',
    		[
    		 'bgShell:bowerUpdatecms',
    		 'bgShell:bowerUpdatecss',
    		 'bgShell:bowerUpdatejquery',
    		 'bgShell:bowerUpdatejs',
    		 'bgShell:bowerUpdatesass',
    		 'bgShell:bowerUpdatesyntax',
    		]
    );
};