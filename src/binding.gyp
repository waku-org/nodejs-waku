{
  "targets": [
    {
      "target_name": "waku",
      "sources": [ "waku_addon.c", "base64.c" ],
      "libraries": [ "-lwaku", "-L../vendor/nwaku/build/" ]
    }
  ]
}
