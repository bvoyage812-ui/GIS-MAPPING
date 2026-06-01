const poiData = [
    {
        id: "start",
        title: "start",
        category: "Village Entry",
        description: "The exact Ichon entry point from the shared Google Earth coordinates.",
        coords: [10.111483, 124.897136],
        imageUrl: "start.jpg",
    },
    {
        id: "House1",
        title: "House1",
        category: "Residence",
        description:
            "One of the local homes nearR the village center.",
        coords: [10.111331, 124.897222],
        imageUrl: "house1.jpg",
    },
    
    {
        id: "House4",
        title: "House4",
        category: "Residence",
        description:
            "A residential marker near the northern section.",
        coords: [10.111075, 124.897647],
        imageUrl: "https://via.placeholder.com/240x120?text=House4",
    },
    
    {
        id: "Cellular Tower",
        title: "Cellular Tower",
        category: "Infrastructure",
        description:
            "Village communications site near the northern section.",
        coords: [10.111122, 124.898147],
        imageUrl: "701087423_1769860357729015_9010463153401448047_n.jpg",
    },
    {
        id: "House7",
        title: "House7",
        category: "Residence",
        description:
            "A residential marker near the southeastern part of Ichon.",
        coords: [10.110983, 124.897800],
        imageUrl: "701118838_3261472054034776_3413548534516608352_n.jpg",
    },
    {
        id: "House8",
        title: "House8",
        category: "Residence",
        description:
            "A residential marker near the southwestern part of Ichon.",
        coords: [10.110933, 124.897931],
        imageUrl: "700927155_1053828797604511_4883455734854628383_n.jpg",
    },{
        id: "PurokCandelaria",
        title: "Purok Candelaria Street",
        category: "Street",
        description:
            "A street marker near the southwestern part of Ichon.",
        coords: [10.110672, 124.898356],
        imageUrl: "700722554_1700847344390966_5053914124522346500_n.jpg",
    },
    {
        id: "House9",
        title: "House9",
        category: "Residence",
        description:
            "A residential marker near the southern part of Ichon.",
        coords: [10.110883, 124.898033],
        imageUrl: "https://via.placeholder.com/240x120?text=House9",
    },
    {
        id: "House13",
        title: "House13",
        category: "Residence",
        description:
            "A residential marker near the southeastern part of Ichon.",
        coords: [10.110489, 124.898489],
        imageUrl: "https://via.placeholder.com/240x120?text=House13",
    },

    {
        id: "House16",
        title: "House16",
        category: "Residence",
        description:
            "A residential marker near the southeastern part of Ichon.",
        coords: [10.110392, 124.898642],
        imageUrl: "https://via.placeholder.com/240x120?text=House16",
    },
    {
        id: "House17",
        title: "House17",
        category: "Residence",
        description:
            "A residential marker near the southeastern part of Ichon.",
        coords: [10.110275, 124.898814],
        imageUrl: "https://via.placeholder.com/240x120?text=House17",
    },
    {
        id: "House18",
        title: "House18",
        category: "Residence",
        description:
            "A residential marker near the southeastern part of Ichon.",
        coords: [10.110186, 124.898914],
        imageUrl: "https://via.placeholder.com/240x120?text=House18",
    },
    {
        id: "House19",
        title: "House19",
        category: "Residence",
        description:
            "A residential marker near the southeastern part of Ichon.",
        coords: [10.110117, 124.899022],
        imageUrl: "https://via.placeholder.com/240x120?text=House19",
    },
    {
        id: "House20",
        title: "House20",
        category: "Residence",
        description:
            "A residential marker near the southeastern part of Ichon.",
        coords: [10.110058, 124.899142],
        imageUrl: "https://via.placeholder.com/240x120?text=House20",
    },
    {
        id: "House21",
        title: "House21",
        category: "Residence",
        description:
            "A residential marker on the east side of the village.",
        coords: [10.110058, 124.899142],
        imageUrl: "https://via.placeholder.com/240x120?text=House21",
    },
    {
        id: "House22",
        title: "House22",
        category: "Residence",
        description:
            "A residential marker near the main coastal lane.",
        coords: [10.110008, 124.899217],
        imageUrl: "https://via.placeholder.com/240x120?text=House22",
    },
    {
        id: "House23",
        title: "House23",
        category: "Residence",
        description:
            "A residential marker near the village market area.",
        coords: [10.110008, 124.899217],
        imageUrl: "https://via.placeholder.com/240x120?text=House23",
    },
    {
        id: "House24",
        title: "House24",
        category: "Residence",
        description:
            "A residential marker close to the village shoreline.",
        coords: [10.109931, 124.899297],
        imageUrl: "https://via.placeholder.com/240x120?text=House24",
    },
    {
        id: "House25",
        title: "House25",
        category: "Residence",
        description:
            "A residential marker near the southern road.",
        coords: [10.109931, 124.899297],
        imageUrl: "https://via.placeholder.com/240x120?text=House25",
    },
    {
        id: "House26",
        title: "House26",
        category: "Residence",
        description:
            "A residential marker next to a small street junction.",
        coords: [10.109892, 124.899361],
        imageUrl: "https://via.placeholder.com/240x120?text=House26",
    },
    {
        id: "House27",
        title: "House27",
        category: "Residence",
        description:
            "A residential marker close to the village edge.",
        coords: [10.109825, 124.899431],
        imageUrl: "https://via.placeholder.com/240x120?text=House27",
    },
    {
        id: "CrispyKing",
        title: "Crispy King",
        category: "Fast Food",
        description:
            "A fast food marker near the local road bend.",
        coords: [10.109675, 124.899636],
        imageUrl: "kk.png",
    },
    {
        id: "House28",
        title: "House28",
        category: "Residence",
        description:
            "A residential marker near a small side lane.",
        coords: [10.109756, 124.899528],
        imageUrl: "https://via.placeholder.com/240x120?text=House28",
    },
    {
        id: "Dayka's Store",
        title: "Dayka's Store",
        category: "Breadhouse",
        description:
            "A commercial marker for a local breadhouse.",
        coords: [10.109589, 124.899628],
        imageUrl: "dayka.jpg",
    },
    {
        id: "Church",
        title: "Church",
        category: "Religious",
        description:
            "A religious marker near the central area.",
        coords: [10.109881, 124.899931],
        imageUrl: "701171372_1455189076304946_1428732147356739898_n.jpg",
    },
   
    {
        id: "Joy joy resto",
        title: "Joy joy resto",
        category: "Restaurant",
        description:
            "A restaurant marker near the northwestern part of Ichon.",
        coords: [10.109453, 124.899800],
        imageUrl: "joyjoy2.jpg",
    },
    {
        id: "Car repair shop",
        title: "Car repair shop",
        category: "Service",
        description:
            "A car repair shop located near the main road.",
        coords: [10.109217, 124.900108],
        imageUrl: "https://via.placeholder.com/240x120?text=Car+repair+shop",
    },
    {
        id: "House33",
        title: "House33",
        category: "Residence",
        description:
            "A residential marker near a quiet village block.",
        coords: [10.109044, 124.900247],
        imageUrl: "https://via.placeholder.com/240x120?text=House33",
    },
   
    {
        id: "House34",
        title: "House34",
        category: "Residence",
        description:
            "A residential marker near the coastal street.",
        coords: [10.108944, 124.900369],
        imageUrl: "https://via.placeholder.com/240x120?text=House34",
    },
    {
        id: "House35",
        title: "House35",
        category: "Residence",
        description:
            "A residential marker near the main village thoroughfare.",
        coords: [10.108750, 124.900572],
        imageUrl: "https://via.placeholder.com/240x120?text=House35",
    },
    {
        id: "House36",
        title: "House36",
        category: "Residence",
        description:
            "A residential marker near the southeast corner of Ichon.",
        coords: [10.108622, 124.900675],
        imageUrl: "https://via.placeholder.com/240x120?text=House36",
    },
    {
        id: "House37",
        title: "House37",
        category: "Residence",
        description:
            "A residential marker near the far end of the village.",
        coords: [10.108469, 124.900769],
        imageUrl: "https://via.placeholder.com/240x120?text=House37",
    },
    {
        id: "House38",
        title: "House38",
        category: "Residence",
        description:
            "A residential marker near the far end of the village.",
        coords: [10.108228, 124.900878],
        imageUrl: "bridge.jpg",
    },
    {
        id: "Ichon Bridge",
        title: "Bridge",
        category: "Residence",
        description:
            "A residential marker near the far end of the village.",
        coords: [10.108161, 124.900903],
        imageUrl: "bridge.jpg",
    },
    {
        id: "Gym",
        title: "Gym",
        category: "Facility",
        description:
            "A community gym located in the center of the village.",
        coords: [10.108028, 124.900942],
        imageUrl: "sessionhall-gym.jpg",
    },
];
