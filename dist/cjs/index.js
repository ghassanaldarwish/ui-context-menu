"use strict";var e=require("react"),t=require("@radix-ui/react-context-menu"),a=require("@radix-ui/react-icons"),r=require("@wds-utilities/cn");function n(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var r=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var o=n(e),s=n(t),c=function(){return c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};function l(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}"function"==typeof SuppressedError&&SuppressedError;var d=s.Root,i=s.Trigger,m=s.Group,u=s.Portal,p=s.Sub,f=s.RadioGroup,x=o.forwardRef((function(e,t){var n=e.className,d=e.inset,i=e.children,m=l(e,["className","inset","children"]);return o.createElement(s.SubTrigger,c({ref:t,className:r.cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",d&&"pl-8",n)},m),i,o.createElement(a.ChevronRightIcon,{className:"ml-auto h-4 w-4"}))}));x.displayName=s.SubTrigger.displayName;var b=o.forwardRef((function(e,t){var a=e.className,n=l(e,["className"]);return o.createElement(s.SubContent,c({ref:t,className:r.cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a)},n))}));b.displayName=s.SubContent.displayName;var N=o.forwardRef((function(e,t){var a=e.className,n=l(e,["className"]);return o.createElement(s.Portal,null,o.createElement(s.Content,c({ref:t,className:r.cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a)},n)))}));N.displayName=s.Content.displayName;var y=o.forwardRef((function(e,t){var a=e.className,n=e.inset,d=l(e,["className","inset"]);return o.createElement(s.Item,c({ref:t,className:r.cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",a)},d))}));y.displayName=s.Item.displayName;var g=o.forwardRef((function(e,t){var n=e.className,d=e.children,i=e.checked,m=l(e,["className","children","checked"]);return o.createElement(s.CheckboxItem,c({ref:t,className:r.cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:i},m),o.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},o.createElement(s.ItemIndicator,null,o.createElement(a.CheckIcon,{className:"h-4 w-4"}))),d)}));g.displayName=s.CheckboxItem.displayName;var v=o.forwardRef((function(e,t){var n=e.className,d=e.children,i=l(e,["className","children"]);return o.createElement(s.RadioItem,c({ref:t,className:r.cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n)},i),o.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},o.createElement(s.ItemIndicator,null,o.createElement(a.DotFilledIcon,{className:"h-4 w-4 fill-current"}))),d)}));v.displayName=s.RadioItem.displayName;var h=o.forwardRef((function(e,t){var a=e.className,n=e.inset,d=l(e,["className","inset"]);return o.createElement(s.Label,c({ref:t,className:r.cn("px-2 py-1.5 text-sm font-semibold text-foreground",n&&"pl-8",a)},d))}));h.displayName=s.Label.displayName;var C=o.forwardRef((function(e,t){var a=e.className,n=l(e,["className"]);return o.createElement(s.Separator,c({ref:t,className:r.cn("-mx-1 my-1 h-px bg-border",a)},n))}));C.displayName=s.Separator.displayName;var w=function(e){var t=e.className,a=l(e,["className"]);return o.createElement("span",c({className:r.cn("ml-auto text-xs tracking-widest text-muted-foreground",t)},a))};w.displayName="ContextMenuShortcut",exports.ContextMenu=d,exports.ContextMenuCheckboxItem=g,exports.ContextMenuContent=N,exports.ContextMenuGroup=m,exports.ContextMenuItem=y,exports.ContextMenuLabel=h,exports.ContextMenuPortal=u,exports.ContextMenuRadioGroup=f,exports.ContextMenuRadioItem=v,exports.ContextMenuSeparator=C,exports.ContextMenuShortcut=w,exports.ContextMenuSub=p,exports.ContextMenuSubContent=b,exports.ContextMenuSubTrigger=x,exports.ContextMenuTrigger=i;
//# sourceMappingURL=index.js.map
