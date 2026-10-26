import type { HeroEpisodes } from "../../../src/data/hero-episodes";

export default {
  "latest": {
    "id": "next-token-weekly--006",
    "number": "006",
    "homepage": {
      "zh-Hans": {
        "eyebrow": "第 006 期",
        "heading": [
          "AI 逆向挡不住，Grok Bot、Muse 用上头：",
          "干活还是过家家？"
        ],
        "lede": "让 AI 给鼠标写一个 macOS 驱动，把手机录好的视频交给 Bot 剪辑、配素材、做封面，再拉几个影视角色组成自己的“AI 公司”——这一期，我们继续聊 Personal Agent，不过这次有了更多真正用起来的故事。",
        "copy": "让 AI 给鼠标写一个 macOS 驱动，把手机录好的视频交给 Bot 剪辑、配素材、做封面，再拉几个影视角色组成自己的“AI 公司”——这一期，我们继续聊 Personal Agent，不过这次有了更多真正用起来的故事。",
        "imageAlt": "#006 AI 逆向挡不住，Grok Bot、Muse 用上头：干活还是过家家？",
        "topicsLabel": "本期议题",
        "topics": [
          "Personal Agent",
          "AI 逆向",
          "Memory"
        ],
        "listenAction": "立即收听",
        "watchAction": "查看本期"
      },
      "en": {
        "eyebrow": "Episode #006",
        "heading": [
          "AI reverse engineering, Grok Bot and Muse:",
          "Real work or playing house?"
        ],
        "lede": "Hands-on stories about AI reverse engineering, Grok Bot, Muse, multi-agent collaboration, skills, memory and the value of original creative work.",
        "copy": "Four co-hosts discuss what personal agents can deliver, where they fail, and what remains worth building.",
        "imageAlt": "#006 AI reverse engineering is unstoppable; hooked on Grok Bot and Muse: real work or playing house?",
        "topicsLabel": "Episode topics",
        "topics": [
          "Personal Agent",
          "Reverse engineering",
          "Memory"
        ],
        "listenAction": "Listen now",
        "watchAction": "Explore episode"
      }
    },
    "media": {
      "audio": true,
      "video": true
    }
  },
  "upcoming": {
    "id": "next-token-weekly--007",
    "collection": "episodes",
    "data": {
      "schemaVersion": 2,
      "number": "007",
      "show": "next-token-weekly",
      "status": "announced",
      "phase": "post-production",
      "detailLayout": true,
      "releasePreview": true,
      "scheduledAt": "2026-10-23",
      "timeZone": "Asia/Shanghai",
      "recordingMode": "in-person",
      "recordingLocation": {
        "zh-Hans": "万象空间",
        "en": "Wanxiang Space"
      },
      "title": {
        "zh-Hans": "#007 DeepSeek 极速狂飙，AI 游戏新机会，AI 改造老家电",
        "en": "#007 DeepSeek at full speed, new opportunities in AI games, and AI makeovers for old appliances"
      },
      "participants": [],
      "mentions": {
        "brands": [],
        "products": [],
        "people": []
      },
      "preview": {
        "eyebrow": {
          "zh-Hans": "第 007 期",
          "en": "Episode #007"
        },
        "heading": {
          "zh-Hans": [
            "DeepSeek 极速狂飙，",
            "AI 游戏新机会，AI 改造老家电"
          ],
          "en": [
            "DeepSeek at full speed,",
            "new opportunities in AI games, and AI makeovers for old appliances"
          ]
        },
        "summary": {
          "zh-Hans": "从 DeepSeek 提速到 AI 游戏，从旧电视改造到语音小硬件：四位主理人聊实际动手体验、Agent 工作流与安全边界。",
          "en": "From faster DeepSeek responses and AI-built games to old TVs and voice devices: hands-on experiences with agents, creative workflows and security."
        },
        "note": {
          "zh-Hans": "已录制，内容整理中。",
          "en": "Recorded; preparing the episode."
        }
      }
    }
  }
} satisfies {
  latest: { id: string } & Pick<HeroEpisodes["latest"]["data"], "number" | "homepage" | "media">;
  upcoming: NonNullable<HeroEpisodes["upcoming"]>;
};
