import { hideAlertMessageFn } from '../util.js';

export const modalNotifierLayout = (ctx) => ctx.html`
<div style="display: none" class="overlay">
    <div class="modal">
        <p>Overlay message</p>
        <a @click=${hideAlertMessageFn} href="javascript:void(0)" class="action">Action</a>
    </div>
</div>
`;