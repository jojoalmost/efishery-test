# E fishery Pricing List App

Aplikasi ini dibuat bertujuan untuk memudahkan admin dalam penambahan data komoditas, lokasi, ukuran dan price list nya

### Stack yang digunakan di aplikasi
- React CRA
- SCSS
- moment.js
- stein-js-client
- json-reactform

### Workflow
- awal aplikasi di jalankan, react akan memanggil component `index.js` yang mempunyai child component yaitu `App.js` dimana semua aplikasi di load disini / main component
- state management menggunakan `React Context` terdapat pada file `src/modules/pricelist/context/PriceListContext.js` sebagai Wrapper / pembungkus di `PriceList.js` component. `Provider` dari `React Context` ini terdapat pada file `src/App.js`
- saat aplikasi dijalankan, component `Table` memanggil `hooks` tentang `stein` yang berada di `PriceListContext.js`
- teradapat 2 macam hooks yang dibuat untuk komunikasi dengan stein, yaitu `src/hooks/useSteinRead.js` sebagai read data dan `src/hooks/useSteinActions.js` sebagai action method dari stein `append`, `edit`, dan `delete`. kedua hooks ini diwrap di dalam `PriceListContext.js` sehingga bisa dipanggil di manapun
- fitur `search` terdapat di `src/modules/pricelist/components/Filters.js` yang mengabil hooks `useSteinActions` untuk request list dengan parameter `search`
- fitur `sorting` terdapat di `src/modules/pricelist/components/Table.js`, disini digunakan `React Memo` setelah mendapatkan data dari `PriceListContext.js` kemudian diolah menjadi sorting yang kemudian akan di passing ke tampilan table tersebut
- semua form pengisian di modal menggukan `stein-js-client` dengan value yang nantinya disimpan didalam `PriceListContext.js`
- `moment.js` disni digunakan untuk memformat tanggal di table, dan proses di create dan update pada `PriceListContext.js` untuk menggabung jam dan tanggal. selain itu juga digunakan sebagai default value dari `json-reactform`

### Layout
- tampilan disini simple terdapat fitur search dan sort. di top panel terdapat fitur `search` tedapat pada tombol `Advanced Search` yang menampilkan modal dengan form
- top panel jg terdapat tombol sorting dengan nilai default berdasarkan `tanggal` dan `desc`
- untuk tombol edit dan delete terdapat di action table
