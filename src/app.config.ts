export default defineAppConfig({
  ui: {
    primary: "green",
    gray: "slate",
    avatar: {
      default: {
        icon: "i-ph-image",
      },
    },
    button: {
      default: {
        loadingIcon: "i-ph-spinner",
      },
    },
    input: {
      default: {
        loadingIcon: "i-ph-spinner",
      },
    },
    select: {
      default: {
        loadingIcon: "i-ph-spinner",
        trailingIcon: "i-ph-caret-down",
      },
    },
    selectMenu: {
      default: {
        selectedIcon: "i-ph-check",
      },
    },
    notification: {
      default: {
        closeButton: {
          icon: "i-ph-x",
        },
      },
    },
    commandPalette: {
      default: {
        icon: "i-ph-magnifying-glass-duotone",
        loadingIcon: "i-ph-spinner",
        selectedIcon: "i-ph-check",
        emptyState: {
          icon: "i-ph-magnifying-glass-duotone",
        },
        closeButton: {
          icon: "i-ph-x",
        },
      },
    },
    table: {
      default: {
        sortAscIcon: "i-ph-sort-ascending",
        sortDescIcon: "i-ph-sort-descending",
        sortButton: {
          icon: "i-ph-list",
        },
        loadingState: {
          icon: "i-ph-spinner",
        },
        emptyState: {
          icon: "i-ph-database",
        },
      },
    },
    pagination: {
      default: {
        prevButton: {
          icon: "i-ph-arrow-left",
        },
        nextButton: {
          icon: "i-ph-arrow-right",
        },
      },
    },
    card: {
      rounded: "rounded-xl",
    },
    tooltip: {
      background: "!bg-background",
      popper: {
        strategy: "absolute",
      },
    },
    breadcrumb: {
      divider: {
        base: "w-4 h-4",
      },
      default: {
        divider: "i-ph-caret-right",
      },
    },

    // `@nuxt/ui-pro` specific
    variables: {
      light: {
        background: "255 255 255",
        foreground: "var(--color-gray-700)",
      },
      dark: {
        background: "var(--color-gray-950)",
        // background: "var(--color-gray-900)",
        foreground: "var(--color-gray-200)",
      },
      header: {
        height: "4rem",
      },
    },
    icons: {
      // dark: "i-heroicons-moon-20-solid",
      dark: "i-ph-moon-duotone",
      // light: "i-heroicons-sun-20-solid",
      light: "i-ph-sun-duotone",
      system: "i-heroicons-computer-desktop-20-solid",
      // search: "i-heroicons-magnifying-glass-20-solid",
      search: "i-ph-magnifying-glass-duotone",
      // external: "i-heroicons-arrow-up-right-20-solid",
      external: "i-ph-arrow-up-right",
      // chevron: "i-heroicons-chevron-down-20-solid",
      chevron: "i-ph-caret-down",
      // hash: "i-heroicons-hashtag-20-solid",
      hash: "i-ph-hash-duotone",
      menu: "i-heroicons-bars-3-20-solid",
      close: "i-heroicons-x-mark-20-solid",
      check: "i-heroicons-check-circle-20-solid",
    },
    presets: {
      button: {
        primary: {
          color: "white",
          variant: "solid",
        },
        secondary: {
          color: "gray",
          variant: "ghost",
        },
        input: {
          color: "white",
          variant: "outline",
          ui: {
            font: "",
            color: {
              white: {
                outline:
                  "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
              },
            },
          },
        },
      },
    },
    notifications: {
      // Show toasts at the top right of the screen
      position: "top-0 bottom-auto",
    },

    header: {
      wrapper: "lg:mb-0 lg:border-0",
      links: {
        trailingIcon: {
          base: "w-4 h-4",
        },
        popover: {
          popper: {
            strategy: "absolute",
          },
          ui: {
            width: "w-[16rem]",
          },
        },
      },
      popover: {
        links: {
          active: "dark:bg-gray-950/50",
          inactive: "dark:hover:bg-gray-950/50",
        },
      },
      button: {
        icon: {
          open: "i-ph-list",
          close: "i-ph-x",
        },
      },
    },
    navigation: {
      accordion: {
        button: {
          trailingIcon: {
            base: "w-4 h-4",
          },
        },
      },
    },
    page: {
      card: {
        to: "dark:hover:bg-gray-900/50",
      },
    },
    content: {
      search: {
        fileIcon: {
          name: "i-ph-file-text-duotone",
        },
      },
      toc: {
        button: {
          trailingIcon: {
            base: "w-4 h-4",
          },
        },
      },
      surround: {
        icon: {
          prev: "i-ph-arrow-left",
          next: "i-ph-arrow-right",
        },
      },
      collapsible: {
        button: {
          icon: {
            base: "w-3 h-3",
          },
        },
      },
      prose: {
        code: {
          button: {
            icon: {
              copy: "i-ph-copy-duotone",
              copied: "i-ph-check-square-duotone",
            },
          },
          icon: {
            terminal: "i-ph-terminal-window-duotone",
          },
        },
      },
    },
  },
});
