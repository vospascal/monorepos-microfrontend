https://www.youtube.com/watch?v=HUVawJXeHfU

To set yarn to version 2 "berry" -> `yarn set version berry`

to see plugins -> `yarn plugin list`

set constrains first install -> `yarn plugin import constraints`

check constrains -> `yarn constraints` run with `yarn constraints --fix` to remove packages that are wrong

to see workspaces -> `yarn workspaces list`

install workspace tools -> `yarn plugin import workspace-tools`

run all builds -> `yarn workspaces foreach run build`

install interactive tools -> `yarn plugin import interactive-tools`

to see if all packages are up to date -> `yarn upgrade-interactive`
