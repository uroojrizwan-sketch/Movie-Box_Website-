const movies = [
    {
        id: 533535,
        title: "Deadpool & Wolverine",
        release_date: "⭐ 7.5/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
        poster_path:
            "https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        category: "Action",
    },
    {
        id: 969681,
        title: "Spider-Man: Brand New Day",
        release_date: "⭐  8/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1000_and_h563_face/7iwUUcKURMT7aKfCwMy6YnGtchD.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/6z418FOS7Y3f9Qts3YzQ0G5PyJw.jpg",
        category: "Action",
    },
    {
        id: 155,
        title: "The Dark Knight",
        release_date: "⭐  9.1/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1000_and_h563_face/enNubozHn9pXi0ycTVYUWfpHZm.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg",
        category: "Action",
    },
    {
        id: 272,
        title: "Batman Begins",
        release_date: "⭐  8.2/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/ew5FcYiRhTYNJAkxoVPMNlCOdVn.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg",
        category: "Action",
    },
     
     
     {
        id: 299534,
        title: "Avengers: Endgame",
        release_date: "⭐  8.4/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        category: "Action",
    },
    {
        id: 246799,
        title: "Crooks",
        release_date: "⭐  7/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1000_and_h563_face/uuTygXpNLEUhfies5ngOdT0cbQH.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/ExYnL0aaV8Nq3WXPvTWgabwVS.jpg",
        category: "Action",
    },
    
    {
        id: 718821,
        title: "Twisters",
        release_date: "⭐  6.5/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/58D6ZAvOKxlHjyX9S8qNKSBE9Y.jpg",
        poster_path:
            "https://image.tmdb.org/t/p/original/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
        category: "Thriller",
    },
     {
        id: 71446,
        title: "Money Heist",
        release_date: "⭐  8.2/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        category: "Thriller",
    },
    {
        id: 496243,
        title: "Parasite",
        release_date: "⭐  8.5/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/tNJB14t2lqZ9L4oyEKoN6DT2ou8.jpg",
        category: "Thriller",
    },
     {
        id: 1284041,
        title: "The Last House",
        release_date: "⭐  5.5/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/2mPmccLg8QCD4ZF6v8kSsUijPPW.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/4EP1qTvFc4qoVNLKeXJn452XoqD.jpg",
        category: "Thriller",
    },
     {
        id: 1425045,
        title: "Brick",
        release_date: "⭐  5.5/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/apNfldKI3RiaukNwJzr8EjRG7Wc.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/t83LxW28WH4arcCxs9cWaDikCJk.jpg",
        category: "Thriller",
    },
    {
        id: 1425045,
        title: "Escape Room",
        release_date: "⭐  6.4/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/apNfldKI3RiaukNwJzr8EjRG7Wc.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
        category: "Thriller",
    },
    {
        id: 300669,
        title: "Don't Breath",
        release_date: "⭐ 7.1/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1000_and_h563_face/hvXWVpKvFWAqiGyTYloudgLXKMY.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/8fIgsHFQtg47xxN7SBwZkg0tZJn.jpg",
        category: "Thriller",
    },
    {
        id: 1022789,
        title: "Inside Out 2",
        release_date: "⭐  7.5/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
        poster_path:
            "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
        category: "Animation",
    },
    {
        id: 109445,
        title: "Frozen",
        release_date: "⭐  7.4/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/u2bZhH3nTf0So0UIC1QxAqBvC07.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/m4uhSpErBKprhsclr0zynTYdupb.jpg",
        category: "Animation",
    },
    {
        id: 920,
        title: "Cars",
        release_date: "⭐ 7.3/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/sOLgkBKf1gjMRc4yXxM5aciXdfr.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/oloVyeBbkVGbFFaUjR8I7Boo7wA.jpg",
        category: "Animation",
    },
    {
        id: 1300926,
        title: "The Angry Birds 2",
        release_date: "⭐  6.4/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/ieAytQ8YcWEZGQpbBy7vHVddwd.jpg",
        poster_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnWwfVlZHddonxD3KNwVeOX14ZIPcDlFjDiXoYvubwg&s=10",
        category: "Animation",
    },
    {
        id: 519182,
        title: "Despicable Me 4",
        release_date: "⭐  6.2/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
        poster_path:
            "https://image.tmdb.org/t/p/original/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
        category: "Animation",
    },
     {
        id: 58551,
        title: "Luck",
        release_date: "⭐  6.5/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/9OpVlfJGNvX3lUqdzY0nGoA6wQa.jpg",
        category: "Animation",
    },
    {
        id: 58551,
        title: "Minions",
        release_date: "⭐  6.4/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/vlOgaxUiMOA8sPDG9n3VhQabnEi.jpg",
        category: "Animation",
    },
    {
        id: 573435,
        title: "Bad Boys: Ride or Die",
        release_date: "⭐  6.5/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/3q01ACG0MWm0DekhvkPFCXyPZSu.jpg",
        poster_path:
            "https://image.tmdb.org/t/p/original/oGythE98MYleE6mZlGs5oBGkux1.jpg",
        category: "Action",
    },
     {
        id: 111110,
        title: "One Piece",
        release_date: "⭐  8.3/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/qD211Hb5XwFxrszzBBe5EUYJerh.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg",
        category: "Action",
    },
    {
        id: 1160018,
        title: "Kill",
        release_date: "⭐  7.4/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg",
        poster_path:
            "https://image.tmdb.org/t/p/original/m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg",
        category: "Thriller",
    },
    {
        id: 762441,
        title: "A Quiet Place: Day One",
        release_date: "⭐  6.2/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg",
        poster_path:
            "https://image.tmdb.org/t/p/original/hU42CRk14JuPEdqZG3AWmagiPAP.jpg",
        category: "Horror",
    },
    {
        id: 250546,
        title: "Annabelle",
        release_date: "⭐  5.5/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/pWZ0srAfPx4XyJMlFkKBlmYfx3C.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/dfRXHNtBRFJ2GjEAbAO5gdvYsNL.jpg",
        category: "Horror",
    },
     {
        id: 1339713,
        title: "Obsession",
        release_date: "⭐  7.8/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/5lTZyuBTNOfawsfPT8Q0cIg6qAF.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg",
        category: "Horror",
    },

    {
        id: 838484,
        title: "Choose or Die",
        release_date: "⭐  4.8/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/isxWigGBWpXtc2xOxybiYWxHzWm.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/2V4KfAG1hvi4YMfL2DpGS6j9G9B.jpg",
        category: "Horror",
    },
     {
        id: 259693,
        title: "The Conjuring 2",
        release_date: "⭐  7.3/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/jZWMogcjw3sGdgVRfZX2FJN3lY5.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg",
        category: "Horror",
    },
    {
        id: 441701,
        title: "Veronica",
        release_date: "⭐  6.2/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/lVYDlp2yC9tCIxGyI8nY7cX4oFB.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/p5Ajy8ZwsfyvkEpjfnWHcXZknfS.jpg",
        category: "Horror",
    },
     {
        id: 8643,
        title: "The Exorcism of Emily Rose",
        release_date: "⭐  6.7/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/eHT36hVNslbJXCY3SXgtzxPE3cl.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/sU9tFWgGD2K974R9bdSQFCi8qpf.jpg",
        category: "Horror",
    },
    {
        id: 11187,
        title: "Child's Play 3",
        release_date: "⭐  5.2/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/8kZT97Ml1ZyawrfHCajmP2b0wPC.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/qYZwchap46ZFGoMckyMbjvZ6axC.jpg",
        category: "Horror",
    },
    
    {
        id: 831815,
        title: "Saving Bikini Bottom: The Sandy Cheeks Movie",
        release_date: "⭐  3.6/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg",
        poster_path:
            "https://image.tmdb.org/t/p/original/30YnfZdMNIV7noWLdvmcJS0cbnQ.jpg",
        category: "Animation",
    },
    {
        id: 249597,
        title: "Detective Hole",
        release_date: "⭐  7.6/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/e9HhOb3o22t89lnpN511GzZE0Fp.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/rBsRNHehYPkd2kS64LSwX6mnPnI.jpg",
        category: "Mystery",
    },
     {
        id: 278178,
        title: "I Will Find You",
        release_date: "⭐  7.1/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/yOna5ZGXrvWO2HdOCKcahx2sCDN.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/ouSDCnouKdtLpf3lslsFkGarNUr.jpg",
        category: "Mystery",
    },
     {
        id: 278178,
        title: "When They See Us",
        release_date: "⭐  8.8/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/5IIg0PhE764qVuKICgmSAE0Jotx.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/oPv3nNtkuc6EPEql5lgdOuQNHuG.jpg",
        category: "Mystery",
    },
    {
        id: 1949,
        title: "Zodiac",
        release_date: "⭐  7.7/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/6w3jt9MGL6sLTmi46bRzpwqG77X.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/6YmeO4pB7XTh8P8F960O1uA14JO.jpg",
        category: "Mystery",
    },
     {
        id: 70523,
        title: "Dark",
        release_date: "⭐  8.7/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/3jDXL4Xvj3AzDOF6UH1xeyHW8MH.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
        category: "Mystery",
    },
     {
        id: 285838,
        title: "If Wishes Could Kill",
        release_date: "⭐  7/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/bOab2Jt3vyXLgoG8bwXmTEdGJUn.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/bdVBDtOuBVaKZqYl5hqf1qVkjQo.jpg",
        category: "Mystery",
    },
    {
        id: 661374,
        title: "Glass Onion: A Knives Out Mystery",
        release_date: "⭐  7.1/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/bOab2Jt3vyXLgoG8bwXmTEdGJUn.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/4VdfSR9CL8pfwtcGmfmeXgbFiW4.jpg",
        category: "Mystery",
    },
     {
        id: 661374,
        title: "Enola Holmes",
        release_date: "⭐  6.7/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/bOab2Jt3vyXLgoG8bwXmTEdGJUn.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/xwPM8NOFccH2nwwp5EP7Qg3O4lT.jpg",
        category: "Mystery",
    },
    {
        id: 890980,
        title: "God's Crooked Lines",
        release_date: "⭐  7.1/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/dtXcuwF1uUi9m0VVfEGEa7GpDzX.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/n3X9tWYFYfE96BoNgtVffuwzQo.jpg",
        category: "Mind-Bending",
    },
     {
        id: 11324,
        title: "Shutter Island",
        release_date: "⭐  8.2/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/rbZvGN1A1QyZuoKzhCw8QPmf2q0.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/lAH2HXxIjRWOrFVjwhBSsNr7yGW.jpg",
        category: "Mind-Bending",
    },
     {
        id: 27205,
        title: "Inception",
        release_date: "⭐  8.8/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/rbZvGN1A1QyZuoKzhCw8QPmf2q0.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
        category: "Mind-Bending",
    },
     {
        id: 950,
        title: "Fight Club",
        release_date: "⭐  8.8/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/rbZvGN1A1QyZuoKzhCw8QPmf2q0.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/2jVOvPaQkRjt92oTr8zzno4zuz7.jpg",
        category: "Mind-Bending",
    },
    {
        id: 77,
        title: "Memento",
        release_date: "⭐  8.4/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/rbZvGN1A1QyZuoKzhCw8QPmf2q0.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/nWtySDlffTfwAa0rSfq61o33ZXV.jpg",
        category: "Mind-Bending",
    },
     {
        id: 90669,
        title: "1899",
        release_date: "⭐  7.3/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/oZMEWCcnFWGdp4W4ICdJgkw1RYf.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/5rLmJKbHBsGAoCjqiEIdsejlf5Q.jpg",
        category: "Mind-Bending",
    },
     {
        id: 1124,
        title: "The Prestige",
        release_date: "⭐  8.5/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/z3br1ub7spqGMkxgjgJSdM4DC21.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/pvSESD7ujxWZwtYDb9l57qE0ywq.jpg",
        category: "Mind-Bending",
    },
     {
        id: 577922,
        title: "Tenet",
        release_date: "⭐  7.3/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/gPucRIw0n3MPv7r1FEdMpngNXr7.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
        category: "Mind-Bending",
    },
    {
        id: 945961,
        title: "Alien: Romulus",
        release_date: "⭐  7.1/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
        poster_path:
            "https://image.tmdb.org/t/p/original/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
        category: "Sci-Fi",
    },
     {
        id: 85720,
        title: "Shadow and Bone",
        release_date: "⭐  7.5/10",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/mS9O9mjPlwpLTne4JgQlDkgREWA.jpg",
        category: "Sci-Fi",
    },
    {
        id: 75758,
        title: "Lost In Space",
        release_date: "⭐  7.3/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/tJAGIHi7tzyVwOhfuoLkJPubj3b.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/wd4K8yNQHnHNPdk57uEA2K8tczt.jpg",
        category: "Sci-Fi",
    },
    {
        id: 158141,
        title: "Supacell",
        release_date: "⭐  7/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/st2VoiCq6RVKsHoLFAchB9cTmKO.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/cn0R3bVFK0WCWwjwaIc00mOY9j3.jpg",
        category: "Sci-Fi",
    },
    {
        id: 97175,
        title: "Fate: The Winx Saga",
        release_date: "⭐  6.8/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/1DmAeDIAN6nvVpgTqiurDPUwuj7.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/pJDHmxahzldWiMlxRvlJGYT9e0F.jpg",
        category: "Sci-Fi",
    },
    {
        id: 119051,
        title: "Wednesday",
        release_date: "⭐  8/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg",
        category: "Sci-Fi",
    },
    {
        id: 203555,
        title: "The Imperfects",
        release_date: "⭐  6.5/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/3hSlcGcWvuA1RrbKaNodNFrpJWu.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/8FVJdvNehGqkt240fa9WMAoKvZc.jpg",
        category: "Sci-Fi",
    },
     {
        id: 99966,
        title: "All of Us Are Dead",
        release_date: "⭐  7.6/10",
        backdrop_path:
            "https://media.themoviedb.org/t/p/w1066_and_h600_face/hL65xOMijIvDqZ0IN682R4STYvb.jpg",
        poster_path:
            "https://media.themoviedb.org/t/p/w440_and_h660_face/8gjbGKe5WNOaLrkoeOUPLvDhPhK.jpg",
        category: "Sci-Fi",
    },
];

let dom_cont = document.querySelector('.dom-cont')

let All = document.querySelector('#All')
let Action = document.querySelector('#Action')
let Thriller = document.querySelector('#Thriller')
let Animation = document.querySelector('#Animation')
let Horror = document.querySelector('#Horror')
let Mystery = document.querySelector('#Mystery')
let Mind_Bending = document.querySelector('#Mind-Bending')
let Sci_Fi = document.querySelector('#Sci-Fi')

let showData = (movies) => {
    dom_cont.innerHTML = movies.map((data)=>`
    <div class="main" >
    <div class="hover_effect">
    <img  class="img" src =${data.poster_path} />
    </div>
    <h5>${data.title}</h5>
    <p>${data.release_date}</p>
    </div>
    `).join(" ");
}

showData(movies)

Action.addEventListener('click',()=>{
    let newMovie = movies.filter((movie)=>movie.category==='Action');
    showData(newMovie);
})

All.addEventListener('click',()=>{
    showData(movies);
})

Thriller.addEventListener('click',()=>{
    let newMovie = movies.filter((movie)=>movie.category==='Thriller');
    showData(newMovie);
})

Horror.addEventListener('click',()=>{
    let newMovie = movies.filter((movie)=>movie.category==='Horror');
    showData(newMovie);
})

Animation.addEventListener('click',()=>{
    let newMovie = movies.filter((movie)=>movie.category==='Animation');
    showData(newMovie);
})

Mystery.addEventListener('click',()=>{
    let newMovie = movies.filter((movie)=>movie.category==='Mystery');
    showData(newMovie);
})

Mind_Bending.addEventListener('click',()=>{
    let newMovie = movies.filter((movie)=>movie.category==='Mind-Bending');
    showData(newMovie);
})

Sci_Fi.addEventListener('click',()=>{
    let newMovie = movies.filter((movie)=>movie.category==='Sci-Fi');
    showData(newMovie);
})