const { Command } = require('commander');
const shell = require('shelljs');
const { Defaults } = require('./constants');

const program = new Command();

const hostGid = () => {
  try {
    const gid = shell.exec('id -g');
    return shell.env['HOST_GID'] = gid;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const hostUid = () => {
  try {
    const uid = shell.exec('id -u');
    return shell.env['HOST_UID'] = uid;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const cat = (paths) => {
  try {
    return shell.cat(paths);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const mv = (src, dest, opts) => {
  try {
    return shell.mv(src, dest);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const cp = (src, dest, opts) => {
  try {
    if (opts.force) {
      return shell.cp('-f', src, dest);
    }
    return shell.cp(src, dest);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

program
  .name('cli')
  .description('Ze CLI')
  .version('0.0.1');

program
  .command('cat')
  .description('concatenate and print to stdio')
  .argument('<file...>', 'file/s to print to stdio')
  .action((args) => {
    const concatenated = cat(args);
    console.log(concatenated.stdout)
    return concatenated;
  });

program
  .command('gid')
  .description('print host gid')
  .action(() => {
    const gid = hostGid();
    console.log(gid.stdout);
    return gid;
  });

program
  .command('uid')
  .description('print host uid')
  .action(() => {
    const uid = hostUid();
    console.log(uid.stdout);
    return uid;
  }); 

program.command('initialize-container-env')
  .description('Initialize container environment')
  .option('-i, --inspect-env', 'cat the env file')
  .action((arg, options) => {
    cp(Defaults.Container.SourceEnv, Defaults.Container.TargetEnv, { force: true });
    if (options.inspectEnv) {
      return cat('.devcontainer/devcontainer.local.env');
    }
  });

  program.command('initialize-application-env')
  .description('Initialize application environment')
  .option('-i, --inspect-env', 'cat the env file')
  .action((arg, options) => {
    cp(Defaults.Application.SourceEnv, Defaults.Application.TargetEnv, { force: true });
    if (options.inspectEnv) {
      return cat('.env');
    }
  });

program.parse();