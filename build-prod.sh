# Build app for production
rm -rf dist
npm run aot
npm run rollup
rm -rf aot
cp -r src/img dist/img
cp -r src/css dist/css
cp src/favicon.ico dist
cp src/manifest.json dist
cp src/index-aot.html dist/index.html
