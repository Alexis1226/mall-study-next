import { objectType } from '@utils/types';
import { create } from 'zustand';

export const useMenuStore = create((set) => ({
  menus: {},
  removeAllMenus: () => set({ menus: {} }),
  updateMenus: (newMenus: objectType) => set({ menus: newMenus }),
}));
