"use strict";(self.webpackChunkreact_test_1=self.webpackChunkreact_test_1||[]).push([[104],{1104:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var s=t(8683),o=t(5671),r=t(3144),i=t(136),a=t(2882),u=t(2791),l=t(8687),c=t(6649),g=t(885),h="Paginator_buttons__3vTph",f="Paginator_button__mTXjx",d="Paginator_selected__mbQKy",p="Paginator_nav__eIfwv",_=t(184);var P=function(e){for(var n=e.totalItemsCount,t=e.pageSize,s=e.portionSize,o=e.onChangeSelectedPage,r=e.selectedPage,i=Math.ceil(n/t),a=[],l=Math.ceil(i/s),c=(0,u.useState)(1),P=(0,g.Z)(c,2),v=P[0],m=P[1],j=(v-1)*s+1,x=v*s,w=1;w<=i;w++)a.push(w);return(0,u.useEffect)((function(){return m(Math.ceil(r/s))}),[r]),(0,_.jsxs)("div",{className:h,children:[v>1&&(0,_.jsx)("button",{onClick:function(){return m(v-1)},className:p,children:"Prev"}),a.filter((function(e){return e>=j&&e<=x})).map((function(e){return(0,_.jsx)("button",{onClick:function(){return o(e)},className:r===e?"".concat(d," ").concat(f):f,children:e},e)})),l>v&&(0,_.jsx)("button",{onClick:function(){return m(v+1)},className:p,children:"Prev"})]})},v="User_user__YoYxQ",m="User_preview__7Niik",j="User_photo__NVWxw",x="User_button__23A-k",w="User_info__ZurdI",S="User_bio__9j7k7",k="User_name__yByFE",C="User_location__uVyYV",N="User_status__pfd1I",F=t(3504);var I=function(e){var n=e.toggleFollowing,t=e.user,s=e.defaultInfo,o=e.followingInProgress;return(0,_.jsxs)("div",{className:v,children:[(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)(F.OL,{to:"/profile/".concat(t.id),children:(0,_.jsx)("img",{className:j,src:t.photos.small?t.photos.small:s.profilePhoto,alt:"Photo"})}),(0,_.jsx)("button",{disabled:o===t.id,onClick:function(){return n(t.id,t.followed)},className:x,children:t.followed?"Unfollow":"Follow"})]}),(0,_.jsxs)("div",{className:w,children:[(0,_.jsxs)("div",{className:S,children:[(0,_.jsx)("div",{className:k,children:t.name}),(0,_.jsxs)("div",{className:C,children:[(0,_.jsx)("div",{children:s.location.city}),(0,_.jsx)("div",{children:s.location.country})]})]}),(0,_.jsx)("div",{className:N,children:t.status?t.status:s.status})]})]})};var U=function(e){var n=e.users,t=e.followingInProgress,s=e.toggleFollowing,o=e.defaultInfo,r=e.onChangeSelectedPage,i=e.totalUsersCount,a=e.pageSize,u=e.portionSize,l=e.selectedPage,c=n.map((function(e){return(0,_.jsx)(I,{followingInProgress:t,toggleFollowing:s,user:e,defaultInfo:o},e.id)}));return(0,_.jsx)("main",{children:(0,_.jsxs)("div",{className:"container",children:[(0,_.jsx)(P,{onChangeSelectedPage:r,totalItemsCount:i,pageSize:a,portionSize:u,selectedPage:l}),c]})})},z=t(7155),Z=t(3636),b=t(7781),y=function(e){return e.usersPage.defaultInfo},T=function(e){return e.usersPage.users},A=function(e){return e.usersPage.pageSize},M=function(e){return e.usersPage.portionSize},D=function(e){return e.usersPage.selectedPage},V=function(e){return e.usersPage.totalUsersCount},Y=function(e){return e.usersPage.isFetching},B=function(e){return e.usersPage.followingInProgress},E=function(e){(0,i.Z)(t,e);var n=(0,a.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).onChangeSelectedPage=function(n){e.props.changePageThunk(n,e.props.pageSize)},e.changeFollowingState=function(n,t){e.props.changeFollowingStateThunk(n,t)},e}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.selectedPage,this.props.pageSize)}},{key:"render",value:function(){return(0,_.jsx)(_.Fragment,{children:this.props.isFetching?(0,_.jsx)(z.Z,{}):(0,_.jsx)(U,(0,s.Z)({toggleFollowing:this.changeFollowingState,onChangeSelectedPage:this.onChangeSelectedPage},this.props))})}}]),t}(u.Component);var Q=(0,b.qC)((0,l.$j)((function(e){return{defaultInfo:y(e),users:T(e),pageSize:A(e),portionSize:M(e),selectedPage:D(e),totalUsersCount:V(e),isFetching:Y(e),followingInProgress:B(e)}}),{getUsersThunk:c.aH,changePageThunk:c.td,changeFollowingStateThunk:c.Bz}),Z.D)(E)},3636:function(e,n,t){t.d(n,{D:function(){return f}});var s=t(8683),o=t(5671),r=t(3144),i=t(136),a=t(2882),u=t(2791),l=t(6871),c=t(8687),g=t(184),h=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var n=function(n){(0,i.Z)(u,n);var t=(0,a.Z)(u);function u(){return(0,o.Z)(this,u),t.apply(this,arguments)}return(0,r.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,g.jsx)(e,(0,s.Z)({},this.props)):(0,g.jsx)(l.Fg,{to:"/login"})}}]),u}(u.Component);return(0,c.$j)(h)(n)}}}]);
//# sourceMappingURL=104.eab5d4a4.chunk.js.map