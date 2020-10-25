#!/bin/sh
# This script creates a new tag on a commit by first
# updating package.json's version to the new release
# version based on the tag, committing it to the repo,
# then tagging that commit with the given tag.
tag=$1
curdir=$(dirname $0)

if git branch | grep '* master'; then

    sed -i.bak "s/\"version\": \".*\"/\"version\": \"${tag}.0\"/" \
        package.json

    git add package.json
    git commit -sm "Bump new tag ${tag}"
    git tag -s -a $tag
    git push origin master --tags

else
    echo "This script can only be run when on the master branch."
    exit 1
fi
