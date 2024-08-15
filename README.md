# Backend Test Case

## Entities

- Member
- Book

## Use Case

- Members can borrow books with conditions
    - [ &check; ]  Members may not borrow more than 2 books
    - [ &check; ]  Borrowed books are not borrowed by other members
    - [ &check; ]  Member is currently not being penalized
- Member returns the book with conditions
    - [ &check; ]  The returned book is a book that the member has borrowed
    - [ &check; ]  If the book is returned after more than 7 days, the member will be subject to a penalty. Member with penalty cannot able to borrow the book for 3 days
- Check the book
    - [ &check; ]  Shows all existing books and quantities
    - [ &check; ]  Books that are being borrowed are not counted
- Member check
    - [ &check; ]  Shows all existing members
    - [ &check; ]  The number of books being borrowed by each member

## Mock Data

- Books

```tsx
[
    {
        code: "JK-45",
        title: "Harry Potter",
        author: "J.K Rowling",
        stock: 1
    },
    {
        code: "SHR-1",
        title: "A Study in Scarlet",
        author: "Arthur Conan Doyle",
        stock: 1
    },
    {
        code: "TW-11",
        title: "Twilight",
        author: "Stephenie Meyer",
        stock: 1
    },
    {
        code: "HOB-83",
        title: "The Hobbit, or There and Back Again",
        author: "J.R.R. Tolkien",
        stock: 1
    },
    {
        code: "NRN-7",
        title: "The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        stock: 1
    },
]
```

- Members

```tsx
[
    {
        code: "M001",
        name: "Angga",
    },
    {
        code: "M002",
        name: "Ferry",
    },
    {
        code: "M003",
        name: "Putri",
    },
]
```

## Requirements

- [ &check; ]  Express.JS
- [ &check; ]  it should be use Swagger as API Documentation
- [ &check; ]  it should be use Database (NoSQL -> MongoDB)
- [ &check; ]  it should be open sourced on your github repo

## Extras

- [ ]  Implement [DDD Pattern]([https://khalilstemmler.com/articles/categories/domain-driven-design/](https://khalilstemmler.com/articles/categories/domain-driven-design/))
- [ &check; ]  Implement Unit Testing (with Jest)

## Notes
- Feel free to add some structure or plugins


------

# ALGORITMA
Kerjakan dengan menggunakan bahasa pemograman yg anda kuasai, buat folder terpisah untuk soal ini

1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
   ```bash
   cd algoritma-case
   node algo1_reverse
   ```

2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
   ```bash
   node algo2_longest
   ```

3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

   ```bash
   node algo3_frequency
   ```

4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
   ```bash
   node algo4_matrix
   ```