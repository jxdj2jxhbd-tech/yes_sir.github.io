#!/bin/bash

FLAG=${FLAG:-"flag{default_flag_here}"}

sed -i "s|FLAG_PLACEHOLDER|${FLAG}|g" /flag

unset FLAG

exec "$@"