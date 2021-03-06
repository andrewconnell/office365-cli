import Command, { CommandAction, CommandError } from '../../Command';
import appInsights from '../../appInsights';
import auth from './AzmgmtAuth';

export default abstract class AzmgmtCommand extends Command {
  public action(): CommandAction {
    const cmd: AzmgmtCommand = this;

    return function (this: CommandInstance, args: any, cb: (err?: any) => void) {
      auth
        .restoreAuth()
        .then((): void => {
          cmd._debug = args.options.debug || false;
          cmd._verbose = cmd._debug || args.options.verbose || false;

          appInsights.trackEvent({
            name: cmd.getCommandName(),
            properties: cmd.getTelemetryProperties(args)
          });
          appInsights.flush();

          if (!auth.service.connected) {
            cb(new CommandError('Connect to the Azure Management Service first'));
            return;
          }

          cmd.commandAction(this, args, cb);
        }, (error: any): void => {
          cb(new CommandError(error));
        });
    }
  }
}