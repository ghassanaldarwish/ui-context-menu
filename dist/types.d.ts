import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

declare const ContextMenu: React.FC<ContextMenuPrimitive.ContextMenuProps>;
declare const ContextMenuTrigger: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>>;
declare const ContextMenuGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuPortal: React.FC<ContextMenuPrimitive.ContextMenuPortalProps>;
declare const ContextMenuSub: React.FC<ContextMenuPrimitive.ContextMenuSubProps>;
declare const ContextMenuRadioGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubTrigger: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuSubContent: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuContent: React.ForwardRefExoticComponent<Omit<Omit<ContextMenuPrimitive.ContextMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref">, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuItem: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuRadioItem: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuLabel: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuSeparator: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
    displayName: string;
};

export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger };
