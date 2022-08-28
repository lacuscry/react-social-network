import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from './ProfileStatus';


describe("ProfileStatus component", () => {
	test("status from props should be in the state", () => {
		const component = create(<ProfileStatus status='hello'/>);
    
		const instance = component.getInstance();

    	expect(instance.state.status).toBe("hello");
	});

	test("after creation <div> should be displayed", () => {
		const component = create(<ProfileStatus/>);
		
		const root = component.root;

		const div = root.findByType('div');

		expect(div).not.toBeNull();
	});

	test("after creation <input> should not be displayed", () => {
		const component = create(<ProfileStatus/>);
		
		const root = component.root;

		expect(() => root.findByType('input')).toThrow();
	});

	test("after creation <div> should contains correct status", () => {
		const component = create(<ProfileStatus status='hello'/>);
		
		const root = component.root;

		const div = root.findByType('div');
		
		expect(div.children[0]).toBe('hello');
 	 });
});