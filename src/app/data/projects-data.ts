export type Project ={
    projectTitle: string;
    projectDescription: string;
    projectPage?: string;
    projectDirectory: string;
    projectTeamSize: string;
    projectEngine: string;
    projectYear: string;
    projectDevStory: string;
    screenshotCount?: number;
    projectTrailerLink?: string;
    projectTags: string[];
}

export const ProjectsData: Project[] = [
    {
        projectTitle: "Muscle Magic",
        projectDescription: "Muscle Magic is a local multiplayer brawler where you play as powerful, muscular wizards and battle your opponents using a variety of wacky spells.",
        projectPage: "https://store.steampowered.com/app/1061150/Muscle_Magic/",
        projectDirectory: "projects/MuscleMagic/",
        projectTeamSize: "20+",
        projectEngine: "Unreal 4",
        projectYear: "2019",
        projectDevStory: "Muscle Magic started as a school project with the goal of creating a party game suited for platforms like the Nintendo Switch. From the beginning, I was heavily involved in all aspects of development. I prototyped and later helped finalize the core combat system, allowing players to cast spells and deal damage in chaotic brawls. I also implemented character animations, drawing on my experience with Animation Blueprints from a previous project.\n\nAs the game evolved, I took on UI programming duties—building the local multiplayer lobby where players could choose hats, staffs, and skin tones for their mage. I ensured these choices carried over into gameplay. I also implemented Steam achievements, including quirky ones like doing a thousand in-game push-ups or landing a set number of hits.\n\nAlthough I wasn’t involved in networking (which gave the team some challenges), I frequently assisted others with gameplay, UI, and animation issues. One of the biggest challenges I faced personally was making sure animations and gameplay synced well with the assets from the art team. I'm most proud of the overall polish and fun factor of the game—it’s fast, silly, and perfect for a quick party round. The game launched on Steam and received a small but positive reception.",
        screenshotCount: 5,
        projectTrailerLink: "https://www.youtube.com/embed/XtOX2gqb1wE",
        projectTags: ["Unreal 4", "Unreal Blueprints"]
    },
    {
        projectTitle: "To The Core",
        projectDescription: "To the Core is a roguelite action-platforming speedrunner where you blast through procedurally generated levels, dodge hazards, and defeat enemies in a race against the clock to save your father.",
        projectPage: "https://store.steampowered.com/app/874030/To_the_Core/",
        projectDirectory: "projects/ToTheCore/",
        projectTeamSize: "20+",
        projectEngine: "Unreal 4",
        projectYear: "2018",
        projectDevStory: "To The Core started as a school project with the goal of creating a roguelike inspired by games like Ratchet & Clank. While we didn’t end up pulling much directly from those influences, it did spark a strong creative direction early on. I began the project by implementing the character animations created by our artists, using Unreal 4’s Animation Blueprint system. This was my first time working in-depth with Unreal’s animation tools, and I learned how to trigger custom events tied to specific animation frames—an experience that deepened my understanding of the engine.\n\nAs the project progressed, I was pulled into AI development, which was a dream come true for me. I’d always wanted to work on game AI, and this gave me the opportunity to explore Unreal’s blackboard and Environment Query System (EQS). I used these tools to create more dynamic and reactive enemies, which I was especially proud of.\n\nThroughout development, our team struggled to find a strong core gameplay loop. We had trouble balancing roguelike mechanics with tight, fun gameplay. I advocated for focusing more on gameplay and even pitched enemy ideas that could be implemented quickly with minimal design or art effort. While I was officially a programmer, I often contributed ideas outside my role and was a go-to team member for feedback across disciplines. Despite its flaws, the final project looked impressively polished—almost like a professionally made indie game.",
        screenshotCount: 6,
        projectTrailerLink: "https://www.youtube.com/embed/Zq4nqB4I4EM",
        projectTags: ["Unreal 4", "Unreal Blueprints", "Unreal Animation"]
    },
    {
        projectTitle: "Random Racing",
        projectDescription: "Random Racing is a kart-style racing game. Players race through colorful tracks while competing against AI-controlled opponents. Inspired by classics like Mario Kart, the game aimed to provide a lighthearted and fun racing experience.",
        projectDirectory: "projects/RandomRacing/",
        projectTeamSize: "4",
        projectEngine: "Unity3D",
        projectYear: "2015",
        projectDevStory: "Random Racing was my second project in Unity and marked one of my earliest experiences developing a game from scratch. It was a school assignment with a clear objective: build a fun racing game. I took on the role of the sole programmer, meaning I was responsible for all the technical aspects of the game.\n\nMy main focus during development was building the AI system. I implemented a waypoint-based system that allowed AI-controlled racers to follow the track and provide a challenge for the player. This proved much harder than expected—despite my best efforts, the AI never reached the level of polish I had hoped for. They often crashed into obstacles or struggled to follow curves smoothly. Still, it was a fantastic learning experience that helped me better understand Unity, C#, and the challenges of game AI.\n\nWhat made the project particularly memorable was the team itself. We had a great dynamic, and even though I struggled with the technical side, the collaborative and fun environment kept me motivated. This project helped lay the foundation for my growth as a game developer and made me realize how much I enjoy working in a creative, supportive team.",
        screenshotCount: 4,
        projectTags: ["Unity3D", "C#"]
    },
    {
        projectTitle: "Dialog Editor V1 (IMGUI)",
        projectDescription: "Dialog Editor V1 is a custom Unity Editor tool built using IMGUI, designed to help create branching dialog systems for RPGs.",
        projectDirectory: "projects/DialogEditorV1/",
        projectTeamSize: "Solo",
        projectEngine: "Unity3D",
        projectYear: "2020",
        projectDevStory: "When I started Dialog Editor V1, the goal wasn’t to solve a specific problem — it was driven by curiosity and a long-standing love for RPGs. Initially, I wanted to create a full set of RPG development tools, but after discussions with my teacher, I focused on just the dialog editor to make the project more manageable and impactful.\n\nAt the time, IMGUI was the standard way to create editor tools in Unity, so I built the entire tool with it. I was responsible for everything: designing the editor's layout, coding the functionality, and creating all of the features from scratch.\n\nThe feature I was most proud of was the 'Dialog Action' system. It allowed a piece of code to run when specific dialog was triggered, enabling dynamic interactions like checking if the player had enough apples and changing the dialog based on that condition. Developing this feature pushed me to learn about C# reflection.\n\nHowever, using reflection introduced a major performance problem. Because IMGUI refreshes on every small action, the system was constantly retrieving field information, which slowed everything down. After investigating the issue, I optimized it by caching the reflection data. Around the same time, Unity released an early version of 'UI Elements' (now UI Toolkit), which offered better performance for editor tools. I decided to partially migrate the tool over to UI Elements to improve responsiveness.\n\nAlthough Dialog Editor V1 was a solo project, my teacher acted as a stakeholder, giving feedback and guiding me through the development process. The tool itself was never published or used commercially, but it laid important foundations for my future work.",
        projectTags: ["Unity3D", "C#", "IMGUI", "Editor Tools"],
    },
    {
        projectTitle: "Dialog Editor V2 (UI Toolkit)",
        projectDescription: "Dialog Editor V2 is an upgraded version of the original dialog editor tool, rebuilt using Unity's UI Toolkit for improved performance and maintainability.",
        projectDirectory: "projects/DialogEditorV2/",
        projectTeamSize: "Solo",
        projectEngine: "Unity3D",
        projectYear: "2021",
        projectDevStory: "The decision to create Dialog Editor V2 came from two main reasons: performance issues in V1 and the messy, hard-to-maintain codebase. In V1, visuals and logic were tightly coupled, which made updates complicated. UI Toolkit offered a way to separate these concerns — similar to how HTML and CSS work — so I took the opportunity to rebuild everything from the ground up.\n\nFor V2, I completely redesigned the UI to make it easier and faster to work with. The new structure separated the visuals from the functionality, which made the tool not only more readable in code but also more flexible when updating or changing the design.\n\nThis was still a solo project, where I handled everything from design, coding, UI, and feature development. The experience I gained from V1’s shortcomings directly fed into the improvements I made for V2. One of the biggest challenges was learning UI Toolkit itself — the documentation at the time was still limited, and my lack of experience with HTML and CSS made understanding UI Toolkit’s structure a bit harder. I ended up spending a lot of time researching and finding answers through the Unity forums.\n\nWhat I’m most proud of in V2 is how clean the tool looks and how flexible it became — it wasn’t just useful for creating dialog trees, but it could also serve as a basic quest design tool. During the development of V2, I started thinking more seriously about expanding the tool into something bigger, like a plugin that would make it easier to create Visual Novel-type games. This eventually planted the idea of building a full Visual Novel Engine.\n\nWhile Dialog Editor V2 was never released commercially, it remains an important step toward that long-term goal.",
        projectTags: ["Unity3D", "C#", "UI Toolkit", "Editor Tools"],
    }
];

ProjectsData.sort((a, b) => Number(b.projectYear) - Number(a.projectYear));