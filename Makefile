TEST_FOLDERS = $$(find . -path ./node_modules -prune -o -name 'test' -print)
test:
	mocha --recursive --reporter spec $(TEST_FOLDERS)

.PHONY: test
