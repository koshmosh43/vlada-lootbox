interface CaseItem {
  name: string;
  image: string;
}

type ItemsDataMap = {
  [slug: string]: CaseItem[];
};

const itemsData: Record<string, { name: string; image: string }[]> = {
  "ember-case": [
    {
      name: "M4A1-S | Icarus Fell",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "Bowie Knife | Doppler Phase 4",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukmRB-Ml0mNbR_Y3mjQCLpxo7Oy3tI9CVdg5sN1nRqVLsyOfn1JK-uZ_LyydivScq4XncmxCwgRBMaONm1uveFwskVkI00Q/144x",
    },
    {
      name: "Hand Wraps | Cobalt Skulls",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6L1NqOB2N5FS6we_qhce-6JjMnHpn7Cl35Xjfnxa3ghpEbOxn1KaaHAnKAKMaGamcRi2HqvyoA00/144x",
    },
    {
      name: "AK-47 | Case Hardened",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mhYe6Bw24H7cQm3rnFrdj23gHk-BJrMDr3dtDDclQ2YVnQ-AW4lem8m9bi65T-nsCo/144x",
    },
    {
      name: "M4A1-S | Master Piece",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuhWJd7ctyj9bN_Iv9nBqyqUE9MT33JYCSd1I2YgqG-QK4w-3u1p_p78jOyyMxuXR24SyOy0S1n1gSOXMJ21bi/144x",
    },
    {
      name: "AK-47 | Neon Rider",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Frontside Misty",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeXoY2gjVCw_kU5ZTqiLYaRe1Q-NVzU-VG3yLq6hJHou8-fyHBn63J0-z-DyPkjgzjA/144x",
    },
    {
      name: "Desert Eagle | Kumicho Dragon",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowdyN2qhJIPHJlA_MlyGrwK9yO7njJS_uszIynRjuSNw5y6LyR211BBNZ_sv26KzzJfhhA/144x",
    },
    {
      name: "Nova | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWdY781lxLyTrI6g3w3hqEBqYT3yINecIAA8Zg2B_VTsxbrp1se86Z6bzHZjuiU8pSGKis-WtyQ/144x",
    },
  ],

  "neon-case": [
    {
      name: "M4A1-S | Icarus Fell",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "Bowie Knife | Doppler Phase 4",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukmRB-Ml0mNbR_Y3mjQCLpxo7Oy3tI9CVdg5sN1nRqVLsyOfn1JK-uZ_LyydivScq4XncmxCwgRBMaONm1uveFwskVkI00Q/144x",
    },
    {
      name: "Hand Wraps | Cobalt Skulls",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6L1NqOB2N5FS6we_qhce-6JjMnHpn7Cl35Xjfnxa3ghpEbOxn1KaaHAnKAKMaGamcRi2HqvyoA00/144x",
    },
    {
      name: "AK-47 | Case Hardened",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mhYe6Bw24H7cQm3rnFrdj23gHk-BJrMDr3dtDDclQ2YVnQ-AW4lem8m9bi65T-nsCo/144x",
    },
    {
      name: "M4A1-S | Master Piece",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuhWJd7ctyj9bN_Iv9nBqyqUE9MT33JYCSd1I2YgqG-QK4w-3u1p_p78jOyyMxuXR24SyOy0S1n1gSOXMJ21bi/144x",
    },
    {
      name: "AK-47 | Neon Rider",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Frontside Misty",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeXoY2gjVCw_kU5ZTqiLYaRe1Q-NVzU-VG3yLq6hJHou8-fyHBn63J0-z-DyPkjgzjA/144x",
    },
    {
      name: "Desert Eagle | Kumicho Dragon",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowdyN2qhJIPHJlA_MlyGrwK9yO7njJS_uszIynRjuSNw5y6LyR211BBNZ_sv26KzzJfhhA/144x",
    },
    {
      name: "Nova | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWdY781lxLyTrI6g3w3hqEBqYT3yINecIAA8Zg2B_VTsxbrp1se86Z6bzHZjuiU8pSGKis-WtyQ/144x",
    },
  ],

  "plague-case": [
    {
      name: "M4A1-S | Icarus Fell",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "Bowie Knife | Doppler Phase 4",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukmRB-Ml0mNbR_Y3mjQCLpxo7Oy3tI9CVdg5sN1nRqVLsyOfn1JK-uZ_LyydivScq4XncmxCwgRBMaONm1uveFwskVkI00Q/144x",
    },
    {
      name: "Hand Wraps | Cobalt Skulls",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6L1NqOB2N5FS6we_qhce-6JjMnHpn7Cl35Xjfnxa3ghpEbOxn1KaaHAnKAKMaGamcRi2HqvyoA00/144x",
    },
    {
      name: "AK-47 | Case Hardened",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mhYe6Bw24H7cQm3rnFrdj23gHk-BJrMDr3dtDDclQ2YVnQ-AW4lem8m9bi65T-nsCo/144x",
    },
    {
      name: "M4A1-S | Master Piece",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuhWJd7ctyj9bN_Iv9nBqyqUE9MT33JYCSd1I2YgqG-QK4w-3u1p_p78jOyyMxuXR24SyOy0S1n1gSOXMJ21bi/144x",
    },
    {
      name: "AK-47 | Neon Rider",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Frontside Misty",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeXoY2gjVCw_kU5ZTqiLYaRe1Q-NVzU-VG3yLq6hJHou8-fyHBn63J0-z-DyPkjgzjA/144x",
    },
    {
      name: "Desert Eagle | Kumicho Dragon",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowdyN2qhJIPHJlA_MlyGrwK9yO7njJS_uszIynRjuSNw5y6LyR211BBNZ_sv26KzzJfhhA/144x",
    },
    {
      name: "Nova | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWdY781lxLyTrI6g3w3hqEBqYT3yINecIAA8Zg2B_VTsxbrp1se86Z6bzHZjuiU8pSGKis-WtyQ/144x",
    },
  ],

  "toolbox-case": [
    {
      name: "M4A1-S | Icarus Fell",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "Bowie Knife | Doppler Phase 4",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukmRB-Ml0mNbR_Y3mjQCLpxo7Oy3tI9CVdg5sN1nRqVLsyOfn1JK-uZ_LyydivScq4XncmxCwgRBMaONm1uveFwskVkI00Q/144x",
    },
    {
      name: "Hand Wraps | Cobalt Skulls",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6L1NqOB2N5FS6we_qhce-6JjMnHpn7Cl35Xjfnxa3ghpEbOxn1KaaHAnKAKMaGamcRi2HqvyoA00/144x",
    },
    {
      name: "AK-47 | Case Hardened",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mhYe6Bw24H7cQm3rnFrdj23gHk-BJrMDr3dtDDclQ2YVnQ-AW4lem8m9bi65T-nsCo/144x",
    },
    {
      name: "M4A1-S | Master Piece",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuhWJd7ctyj9bN_Iv9nBqyqUE9MT33JYCSd1I2YgqG-QK4w-3u1p_p78jOyyMxuXR24SyOy0S1n1gSOXMJ21bi/144x",
    },
    {
      name: "AK-47 | Neon Rider",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Frontside Misty",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeXoY2gjVCw_kU5ZTqiLYaRe1Q-NVzU-VG3yLq6hJHou8-fyHBn63J0-z-DyPkjgzjA/144x",
    },
    {
      name: "Desert Eagle | Kumicho Dragon",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowdyN2qhJIPHJlA_MlyGrwK9yO7njJS_uszIynRjuSNw5y6LyR211BBNZ_sv26KzzJfhhA/144x",
    },
    {
      name: "Nova | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWdY781lxLyTrI6g3w3hqEBqYT3yINecIAA8Zg2B_VTsxbrp1se86Z6bzHZjuiU8pSGKis-WtyQ/144x",
    },
  ],

  "lovely-case": [
    {
      name: "M4A1-S | Icarus Fell",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "Bowie Knife | Doppler Phase 4",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukmRB-Ml0mNbR_Y3mjQCLpxo7Oy3tI9CVdg5sN1nRqVLsyOfn1JK-uZ_LyydivScq4XncmxCwgRBMaONm1uveFwskVkI00Q/144x",
    },
    {
      name: "Hand Wraps | Cobalt Skulls",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6L1NqOB2N5FS6we_qhce-6JjMnHpn7Cl35Xjfnxa3ghpEbOxn1KaaHAnKAKMaGamcRi2HqvyoA00/144x",
    },
    {
      name: "AK-47 | Case Hardened",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mhYe6Bw24H7cQm3rnFrdj23gHk-BJrMDr3dtDDclQ2YVnQ-AW4lem8m9bi65T-nsCo/144x",
    },
    {
      name: "M4A1-S | Master Piece",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuhWJd7ctyj9bN_Iv9nBqyqUE9MT33JYCSd1I2YgqG-QK4w-3u1p_p78jOyyMxuXR24SyOy0S1n1gSOXMJ21bi/144x",
    },
    {
      name: "AK-47 | Neon Rider",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Frontside Misty",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeXoY2gjVCw_kU5ZTqiLYaRe1Q-NVzU-VG3yLq6hJHou8-fyHBn63J0-z-DyPkjgzjA/144x",
    },
    {
      name: "Desert Eagle | Kumicho Dragon",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowdyN2qhJIPHJlA_MlyGrwK9yO7njJS_uszIynRjuSNw5y6LyR211BBNZ_sv26KzzJfhhA/144x",
    },
    {
      name: "Nova | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWdY781lxLyTrI6g3w3hqEBqYT3yINecIAA8Zg2B_VTsxbrp1se86Z6bzHZjuiU8pSGKis-WtyQ/144x",
    },
  ],

  "steampunk-case": [
    {
      name: "M4A1-S | Icarus Fell",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "Bowie Knife | Doppler Phase 4",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukmRB-Ml0mNbR_Y3mjQCLpxo7Oy3tI9CVdg5sN1nRqVLsyOfn1JK-uZ_LyydivScq4XncmxCwgRBMaONm1uveFwskVkI00Q/144x",
    },
    {
      name: "Hand Wraps | Cobalt Skulls",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6L1NqOB2N5FS6we_qhce-6JjMnHpn7Cl35Xjfnxa3ghpEbOxn1KaaHAnKAKMaGamcRi2HqvyoA00/144x",
    },
    {
      name: "AK-47 | Case Hardened",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mhYe6Bw24H7cQm3rnFrdj23gHk-BJrMDr3dtDDclQ2YVnQ-AW4lem8m9bi65T-nsCo/144x",
    },
    {
      name: "M4A1-S | Master Piece",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuhWJd7ctyj9bN_Iv9nBqyqUE9MT33JYCSd1I2YgqG-QK4w-3u1p_p78jOyyMxuXR24SyOy0S1n1gSOXMJ21bi/144x",
    },
    {
      name: "AK-47 | Neon Rider",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Frontside Misty",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeXoY2gjVCw_kU5ZTqiLYaRe1Q-NVzU-VG3yLq6hJHou8-fyHBn63J0-z-DyPkjgzjA/144x",
    },
    {
      name: "Desert Eagle | Kumicho Dragon",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowdyN2qhJIPHJlA_MlyGrwK9yO7njJS_uszIynRjuSNw5y6LyR211BBNZ_sv26KzzJfhhA/144x",
    },
    {
      name: "Nova | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWdY781lxLyTrI6g3w3hqEBqYT3yINecIAA8Zg2B_VTsxbrp1se86Z6bzHZjuiU8pSGKis-WtyQ/144x",
    },
  ],

  "gigabula-case": [
    {
      name: "M4A1-S | Icarus Fell",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "Bowie Knife | Doppler Phase 4",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukmRB-Ml0mNbR_Y3mjQCLpxo7Oy3tI9CVdg5sN1nRqVLsyOfn1JK-uZ_LyydivScq4XncmxCwgRBMaONm1uveFwskVkI00Q/144x",
    },
    {
      name: "Hand Wraps | Cobalt Skulls",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6L1NqOB2N5FS6we_qhce-6JjMnHpn7Cl35Xjfnxa3ghpEbOxn1KaaHAnKAKMaGamcRi2HqvyoA00/144x",
    },
    {
      name: "AK-47 | Case Hardened",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mhYe6Bw24H7cQm3rnFrdj23gHk-BJrMDr3dtDDclQ2YVnQ-AW4lem8m9bi65T-nsCo/144x",
    },
    {
      name: "M4A1-S | Master Piece",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuhWJd7ctyj9bN_Iv9nBqyqUE9MT33JYCSd1I2YgqG-QK4w-3u1p_p78jOyyMxuXR24SyOy0S1n1gSOXMJ21bi/144x",
    },
    {
      name: "AK-47 | Neon Rider",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Frontside Misty",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeXoY2gjVCw_kU5ZTqiLYaRe1Q-NVzU-VG3yLq6hJHou8-fyHBn63J0-z-DyPkjgzjA/144x",
    },
    {
      name: "Desert Eagle | Kumicho Dragon",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowdyN2qhJIPHJlA_MlyGrwK9yO7njJS_uszIynRjuSNw5y6LyR211BBNZ_sv26KzzJfhhA/144x",
    },
    {
      name: "Nova | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWdY781lxLyTrI6g3w3hqEBqYT3yINecIAA8Zg2B_VTsxbrp1se86Z6bzHZjuiU8pSGKis-WtyQ/144x",
    },
  ],

  "striking-ninja-case": [
    {
      name: "M4A1-S | Icarus Fell",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "Bowie Knife | Doppler Phase 4",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukmRB-Ml0mNbR_Y3mjQCLpxo7Oy3tI9CVdg5sN1nRqVLsyOfn1JK-uZ_LyydivScq4XncmxCwgRBMaONm1uveFwskVkI00Q/144x",
    },
    {
      name: "Hand Wraps | Cobalt Skulls",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6L1NqOB2N5FS6we_qhce-6JjMnHpn7Cl35Xjfnxa3ghpEbOxn1KaaHAnKAKMaGamcRi2HqvyoA00/144x",
    },
    {
      name: "AK-47 | Case Hardened",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mhYe6Bw24H7cQm3rnFrdj23gHk-BJrMDr3dtDDclQ2YVnQ-AW4lem8m9bi65T-nsCo/144x",
    },
    {
      name: "M4A1-S | Master Piece",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuhWJd7ctyj9bN_Iv9nBqyqUE9MT33JYCSd1I2YgqG-QK4w-3u1p_p78jOyyMxuXR24SyOy0S1n1gSOXMJ21bi/144x",
    },
    {
      name: "AK-47 | Neon Rider",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/144x",
    },
    {
      name: "M4A1-S | Frontside Misty",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeXoY2gjVCw_kU5ZTqiLYaRe1Q-NVzU-VG3yLq6hJHou8-fyHBn63J0-z-DyPkjgzjA/144x",
    },
    {
      name: "Desert Eagle | Kumicho Dragon",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowdyN2qhJIPHJlA_MlyGrwK9yO7njJS_uszIynRjuSNw5y6LyR211BBNZ_sv26KzzJfhhA/144x",
    },
    {
      name: "Nova | Hyper Beast",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWdY781lxLyTrI6g3w3hqEBqYT3yINecIAA8Zg2B_VTsxbrp1se86Z6bzHZjuiU8pSGKis-WtyQ/144x",
    },
  ],
};

export default itemsData;