import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/post/post.repo';

export default class SinglePostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context = {
        post: <models.IBlogPost>{}
    };
    
    constructor(private postRepo: PostRepository) {
        super();
    }
    
    navigatedTo(parameters: any): void {
        let idValue: string = parameters.someid;
        this.postRepo.getPost(idValue).then((success) => {
            console.log(success);
            this.context.post = success;
        }, (err) => {
            console.log(err);
        });
    }
}

register.viewControl('singlepost-vc', SinglePostViewControl, [PostRepository]);
