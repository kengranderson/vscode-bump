
/* IMPORT */

import Changelog from './changelog';
import Config from './config';
import Utils from './utils';
import * as vscode from 'vscode';

/* COMMIT */

const Commit = {

  async do ( git, version ) {
    const jira_ticket = await vscode.window.showInputBox({
      prompt: 'Enter the JIRA Ticket #',
    });

    const config = Config.get (),
          message = Changelog.renderLine ( jira_ticket + " - " + config.commit.message, {version} );

    return Utils.exec ( `git add . && git commit -a -m "${message}"`, { cwd: git._baseDir } );

  }

};

/* EXPORT */

export default Commit;
